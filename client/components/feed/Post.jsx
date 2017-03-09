import React from 'react';

export default class Post extends React.Component {
    render() {
      
        return (
            <div className='PostContainer'>
              <div className="postHeader">
                <div className="postTime">Posted at : {this.props.time}</div>
                <div className="postAuthor">by : {this.props.author}</div>
              </div>
              <div className="postBody">
                <div className="postContent">{this.props.content}</div>

              </div>
            </div>
            )
    }
}
