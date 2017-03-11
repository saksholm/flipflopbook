import React from 'react';
import timeago from 'timeago.js';
//import PostImageForm from './PostImageForm.jsx';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Meteor} from 'meteor/meteor';

export class Post extends React.Component {

    flipFlop(type) {
      this.props.submit(type);
    }
    render() {
        const ta = new timeago().format(this.props.time * 1000);
        const flips = this.props.votes.filter( (vote) => {
          if(vote.type === 'flip') return true;
          return false;
        }).length;

        const flops = this.props.votes.filter( (vote) => {
          if(vote.type === 'flop') return true;
          return false;
        }).length;

        return (
            <div className='PostContainer'>
              <div className="postHeader">
                <div className="postAuthor">{this.props.author}</div>
                <div className="postTime">{ta}</div>
                <div className="flipflop">
                  flips: {flips}, flops: {flops}
                  <button onClick={() => this.flipFlop('flip')}>flip</button>
                  <button onClick={() => this.flipFlop('flop')}>flop</button>
                </div>
              </div>
              <div className="postBody">
                <div className="postContent">{this.props.content}</div>
              </div>
            </div>
            )
    }
}



const mutation = gql`
  mutation addVote($type: String!, $postId: String!, $userId: String!) {
    addVote(type: $type, postId: $postId, userId: $userId) {
      type userId
    }
  }
`;


export default graphql(mutation, {
  props: ({mutate, ownProps}) => {
    return {
      submit: (type) => {
        mutate({
          variables: {
            type: type,
            postId: ownProps.postId,
            userId: Meteor.userId(),
          },
          updateQueries: {
            Posts: (previousResult, {mutationResult}) => {
              return {
                posts: (
                  previousResult.posts.map( (item) => {
                    if(item._id === ownProps.postId) {
                      return {
                        ...item,
                        votes: [
                          ...item.votes,
                          mutationResult.data.addVote
                        ]
                      }
                    }
                    return item;
                  })
                )
              }
            }
          }
        })
      }
    }
  }


})(Post);
