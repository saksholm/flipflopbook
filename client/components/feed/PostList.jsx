import React from 'react';
import Post from './Post.jsx';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

export class FeedList extends React.Component {
    render() {
      console.log("this props", this.props.data.feeds);

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
  query Post {
    posts {
      _id type message handle timestamp seenBy
    }
  }
`;

const PostListWithData = graphql(query, {
  options: ownProps => {
    return {
      pollInterval: 5000,
    }
  },
})(FeedList);

export default PostListWithData;
