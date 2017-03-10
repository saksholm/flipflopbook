import React from 'react';
import PostList from './PostList.jsx';
import PostForm from './PostForm.jsx';

const Feed = (props, context) => {
  return (
      <div className='Feed content'>
        {props.hideForm ? "" : <PostForm /> }
        <PostList />
      </div>
      )
}

export default Feed;
