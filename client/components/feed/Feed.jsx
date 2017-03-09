import React from 'react';
import PostList from './PostList.jsx';
import PostForm from './PostForm.jsx';

export default class Feed extends React.Component {
    render() {
        return (
            <div className='Feed content'>
              <PostForm />
              <PostList />
            </div>
            )
    }
}
