import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

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

      return (
        <form className="PostForm" onSubmit={e => this.onSubmit(e)}>
          <input className="inputField" type="text" ref={e => (this.input = e)} value={this.state.newMessage} onChange={e => this.setState({newMessage: e.target.value}) } />
          <input className="inputSubmit" type="submit"/>
        </form>
      )
    }
}

const mutation = gql`
  mutation addPost($message: String!, $type: String!) {
    addPost(message: $message, type: $type) {
      _id type handle message timestamp seenBy
    }
  }
`;

export default graphql(mutation, {
  props: ({mutate, ownProps}) => {
    return {
      submit: (message) => {
        mutate({
          variables: {
            type: 'post',
            message
          },
          updateQueries: {
            Posts: (previousResult, {mutationResult}) => {
              return update(previousResult, {
                posts: {
                  $unshift: [mutationResult.data.addPost],
                }
              });
            }
          },
        })
      }
    }
  }
})(PostForm);
