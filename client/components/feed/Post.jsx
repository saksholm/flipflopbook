import React from 'react';
import timeago from 'timeago.js';

export default class Post extends React.Component {
    render() {
        const ta = new timeago().format(this.props.time * 1000);
        return (
            <div className='PostContainer'>
              <div className="postHeader">
                <div className="postTime">Posted at : {ta}</div>
                <div className="postAuthor">by : {this.props.author}</div>
              </div>
              <div className="postBody">
                <div className="postContent">{this.props.content}</div>          
              </div>
            </div>
            )
    }
}
