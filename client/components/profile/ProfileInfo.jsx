import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class ProfileInfo extends React.Component {
    render() {
        if(this.props.data.loading) {
          return <div>Loading data... please wait!</div>
        }
        if(this.props.data.error) {
          return <div>Sorry, some errors :F, {JSON.stringify(this.props.data.error) }</div>
        }
        const followersNb = this.props.data.currentUser.followers.length;
        const followingNb = this.props.data.currentUser.followee.length;
        return (
            <div className='ProfileInfo'>
              <div className="profilePicture">
                <img src={this.props.data.currentUser.image} alt='Profile' />
              </div>
              <div className="infoContainer">
                <div className="profileName">
                  {this.props.data.currentUser.username}
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


const query = gql`
  query currentUser {
    currentUser {
      firstName
      lastName
      username
      image
      facebookID
      location {
        name
        lat
        lng
      }
      followers{
        _id
        firstName
        lastName
        username
        image
        facebookID
      }
      followee{
        _id
        firstName
        lastName
        username
        image
        facebookID
      }
    }
  }
`;

const ProfileInfoWithData = graphql(query, {
  options: ownProps => {
    return {
      pollInterval: 500,
    }
  },
})(ProfileInfo);

export default ProfileInfoWithData;
