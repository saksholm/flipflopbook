import React from 'react';
import timeago from 'timeago.js';
import PostImageForm from './PostImageForm.jsx';

export default class Post extends React.Component {
    render() {
        const ta = new timeago().format(this.props.time * 1000);
        return (
            <div className='PostContainer'>
              <div className="postHeader">
                <div className="postAuthor">{this.props.author}</div>
                <div className="postTime">{ta}</div>
              </div>
              <div className="postBody">
                <PostImageForm />
                <div className="postContent">{this.props.content}</div>
              </div>
            </div>
            )
    }
}
