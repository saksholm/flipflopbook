import React from 'react';
import Person from './Person.jsx';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Meteor} from 'meteor/meteor';

//const demoPeople = [{type:"text", time:"10:00AM", author:"Someone", content:"Hello World!"}, {type:"image", time:"10:00AM", author:"Someone", content:"http://google.com"}];


export class PeopleList extends React.Component {
    render() {

      if(this.props.data.loading) {
        return <p>Loading data... please wait</p>
      }

      if(this.props.data.error) {
        return <p>Error :G</p>
      }

      return (
          <div>
            { this.props.data.users.map( (user) => {
              let following;
              if(Meteor.user().profile.followee.indexOf(user._id) !== -1) {
                following = true;
              } else {
                following = false;
              }


              if(user._id !== Meteor.userId() ) {
                return <Person key={user._id} data={user} following={following}/>
              }

              return true;
            } )}
          </div>
          )
    }
}


const query = gql`
  query PeopleList {
    users {
      _id
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
      followee
      followers
    }
  }
`;

/*
type User {
    _id: String!,
    firstName: String,
    lastName: String!,
    username: String!
    image: String!,
    facebookID: String!,
    location: Location,
    followee: [String]!,
    followers: [String]!
}
*/

const PeopleListWithData = graphql(query, {
  options: ownProps => {
    return {
      pollInterval: 1000,
    }
  },
})(PeopleList);

export default PeopleListWithData;
