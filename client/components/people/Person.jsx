import React from 'react';
import Follow from './Follow.jsx';

export default class Person extends React.Component {
    render() {
        return (
          <div>
            <div className="Person">
              <div className="wrapper">
                <div className="imageWrapper">
                  <img className="image" src={"https://graph.facebook.com/"+ this.props.data.facebookID + "/picture"} alt='Profile' />
                </div>

                <div className="info">
                  {this.props.data.username}'s profile
                </div>
              </div>
              <div className="followButton">
                <Follow userId={this.props.data._id} following={this.props.following}/>                
              </div>
            </div>

          </div>
            )
    }
}
