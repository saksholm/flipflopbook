import React from 'react';


export default class ProfileInfo extends React.Component {
    render() {

        const followersNb = this.props.currentUser.followers.length;
        const followingNb = this.props.currentUser.followee.length;
        return (
            <div className='ProfileInfo'>
              <div className="profilePicture">
                <img src={this.props.currentUser.image} alt='Profile' />
              </div>
              <div className="infoContainer">
                <div className="profileName">
                  {this.props.currentUser.username}
                </div>
                <div className="optionalInfo">
                  <div className="locationInfo">

                  </div>
                  <div className="followInfo">
                    <div className="followers">Followed by : {followersNb} flipfloppers</div>
                    <div className="following">Folowing : {followingNb} flipfloppers</div>
                  </div>
                </div>
              </div>


              {/* Edit state */}
            </div>
            )
    }
}
