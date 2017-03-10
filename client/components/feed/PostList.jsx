import React from 'react';
import Post from './Post.jsx';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

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
                  <Post key={post._id} author={post.handle} time={post.timestamp} type={post.type} content={post.message} />
                )
              }
              )}
            </div>
            )
    }
}


const query = gql`
  query Posts {
    posts {
      _id type message handle timestamp seenBy
    }
  }
`;

const PostListWithData = graphql(query, {
  options: ownProps => {
    return {
      pollInterval: 500,
    }
  },
})(PostList);

export default PostListWithData;
