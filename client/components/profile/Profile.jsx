import React from 'react';
import ProfileInfo from './ProfileInfo.jsx';
import Feed from '../feed/Feed.jsx';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class Profile extends React.Component {
    render() {
        if(this.props.data.loading) {
          return <div>Loading data... please wait!</div>
        }
        if(this.props.data.error) {
          return <div>Sorry, some errors :F, {JSON.stringify(this.props.data.error) }</div>
        }
        return (
            <div className='Profile content'>
              <ProfileInfo currentUser={this.props.data.currentUser} />
              <div>
                <Feed currentUser={this.props.data.currentUser} hideForm />
              </div>
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
      followers
      followee
    }
  }
`;

const ProfileWithData = graphql(query, {
  options: ownProps => {
    return {
      pollInterval: 500,
    }
  },
})(Profile);

export default ProfileWithData;
