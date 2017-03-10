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
        return (
            <div className='ProfileInfo'>
              <div className="profilePicture">
                <img src="https://graph.facebook.com/10155098577208234/picture?type=large" alt='Profile' />
              </div>
              <div className="profileName">
                {this.props.data.currentUser.username}
              </div>
              {/* optional info */}
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
