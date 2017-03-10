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

        this.props.submit(this.state.newMessage);
        this.setState({newMessage: ''});

        // const content = Meteor.user().profile.name;
        // this.props.submit({variables: {channelName: this.props.channelName, handle:name, message:this.refs.message.value}})
        // this.refs.message.value = '';
    }

    render() {

        return (
          <div className="PostForm">
            <form onSubmit={e => this.onSubmit(e)}>
              <input type="text" ref={e => (this.input = e)} value={this.state.newMessage} onChange={e => this.setState({newMessage: e.target.value}) } />
              <input type="submit"/>
            </form>
          </div>
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
                  $push: [mutationResult.data.addPost],
                }
              });
            }
          },
        })
      }
    }
  }
})(PostForm);
