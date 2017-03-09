import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Posts} from './collections';
import postsMockData from './postsMockData';

Accounts.onCreateUser((options, user) => {
  const firstName = user.services.facebook.first_name;
  const lastName = user.services.facebook.last_name.substring(0,1);
  const userName = firstName + " " + lastName;
  return Object.assign({}, user, {userName});
});

Meteor.startup(() => {
  const totalPosts = Posts.find({}).count();
  if(totalPosts === 0) {
    postsMockData.map((post) => {
      Posts.insert(post);
      return true;
    });

    console.log("Added some posts mockdata to you!");
  }
});
