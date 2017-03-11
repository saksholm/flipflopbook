import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';
import PostImageForm from './PostImageForm.jsx';
import WithLocation from './WithLocation.jsx';

export class PostForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        newMessage: '',
      }
    }

    componentDidMount(){
        this.input.focus();
    }

    onSubmit(e) {
      e.preventDefault();
      if(this.state.newMessage) {
        this.props.submit(this.state.newMessage);
        this.setState({newMessage: ''});
      }
    }

    render() {
      console.log('PostForm', this.props.location);
      return (
        <div className="PostForm">

        <PostImageForm />
        <form className="PostForm" onSubmit={e => this.onSubmit(e)}>
          <input className="inputField" type="text" ref={e => (this.input = e)} value={this.state.newMessage} onChange={e => this.setState({newMessage: e.target.value}) } />
          <input className="inputSubmit" type="submit" disabled={!this.props.location} />
        </form>
      </div>
      )
    }
}

const mutation = gql`
  mutation addPost($message: String!, $type: String!, $lat: Float, $lng: Float) {
    addPost(message: $message, type: $type, lat: $lat, lng: $lng ) {
      _id type handle message timestamp seenBy
      location {lat lng}
    }
  }
`;

const PostFormContainer = graphql(mutation, {
  props: ({mutate, ownProps}) => {
//    console.log('PostForm graphql mutation', ownProps);
    return {
      submit: (message) => {
        mutate({
          variables: {
            type: 'post',
            message,
            lat: ownProps.location.latitude,
            lng: ownProps.location.longitude
          },
          refetchQueries: ['Posts'],
          // updateQueries: {
          //   Posts: (previousResult, {mutationResult}) => {
          //     const updateresult= update(previousResult, {
          //       posts: {
          //         $unshift: [mutationResult.data.addPost],
          //       }
          //     });
          //
          //     console.log({previousResult, mutationResult, updateresult})
          //     return updateresult;
          //   }
          // },
        })
      }
    }
  }
})(PostForm);

export default WithLocation(PostFormContainer);
