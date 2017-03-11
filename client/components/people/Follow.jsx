import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Meteor} from 'meteor/meteor';

export class Follow extends React.Component {
    follow = (userId) => {
      this.props.submit(userId);
    }

    render() {
      return (
          <div className='Follow'>
            {this.props.following === false ?
              (<button className="followButton" onClick={() => this.follow(this.props.userId)}>Follow</button>) :
              (<button className="followButton" disabled="disabled">Following</button>)
            }
          </div>
      )
    }
}


const mutation = gql`
  mutation follow($userId: String!, $ownId: String!) {
    follow(userId: $userId, ownId: $ownId) {
      userId
    }
  }
`;

export default graphql(mutation, {
  props: ({mutate, ownProps}) => {
    return {
      submit: (userId) => {
        mutate({
          variables: {
            userId,
            ownId: Meteor.userId(),
          },
          updateQueries: {
            PeopleList: (previousResult, {mutationResult}) => {
              return {
                users: (
                  previousResult.users.map((item) => {
                    const currentUser = Meteor.userId();
                    if(item._id === userId) {
                      // this is where we update followed user (followers array);
                      return {
                        ...item,
                        followers: {
                          ...item.followers,
                          currentUser,
                        }
                      };
                    } else if (item._id === currentUser ) {
                      return {
                        ...item,
                        followee: {
                          ...item.followee,
                          userId
                        }
                      };
                    } else {
                      return item;
                    }
                  }) // map
                ) // users
              }; // return
            }
          } //updateQueries
        }) // mutate
      } // submit
    } // return
  } // props
})(Follow);
