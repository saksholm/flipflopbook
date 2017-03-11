import React from 'react';
import Post from './Post.jsx';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Meteor} from 'meteor/meteor';

export class PostList extends React.Component {
/*
    shouldComponentUpdate(nextProps, nextState) {

      if(this.props.data.loading === false || (nextProps.data.posts.length !== this.props.data.posts.length) ) {
        return true;
      }
      return false;
    }
*/
    render() {
      if(this.props.data.loading) {
        return <div>Loading data... please wait!</div>
      }
      if(this.props.data.error) {
        return <div>Sorry, some errors :F, {JSON.stringify(this.props.data.error) }</div>
      }
//      const demoPosts = [{type:"text", time:"10:00AM", author:"Someone", content:"Hello World!"}, {type:"image", time:"10:00AM", author:"Someone", content:"http://google.com"}];
        return (
            <div>
              {this.props.data.posts.map(post => {
                return (
                  <Post key={post._id} author={post.handle} time={post.timestamp} type={post.type} content={post.message} postId={post._id} votes={post.votes}/>
                )
              }
              )}
            </div>
            )
    }
}


const query = gql`
  query Posts ($own: Boolean, $userId: String) {
    posts (own: $own, userId: $userId) {
      _id
      type
      message
      handle
      image
      location {
        lat
        lng
      }
      timestamp
      votes {
        type
        userId
      }
      seenBy
    }
  }
`;

const PostListWithData = graphql(query, {
  options: ownProps => {
    return {
      pollInterval: 500,
      variables: {
        own: ownProps.own ? true : false,
        userId: Meteor.userId(),
      }
    }
  },
})(PostList);

export default PostListWithData;
