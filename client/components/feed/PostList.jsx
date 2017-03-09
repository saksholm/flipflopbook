import React from 'react';
import Post from './Post.jsx';

const demoPosts = [{type:"text", time:"10:00AM", author:"Someone", content:"Hello World!"}, {type:"image", time:"10:00AM", author:"Someone", content:"http://google.com"}];

export default class Feed extends React.Component {
    render() {
        return (
            <div>
              {demoPosts.map((post, index) => {
                return (
                  <Post key={index} author={post.author} time={post.time} type={post.type} content={post.content} />
                )
              }
              )}
            </div>
            )
    }
}
