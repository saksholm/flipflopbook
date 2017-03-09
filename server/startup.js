import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Feeds} from './collections';
import feedsMockData from './feedsMockData';

Accounts.onCreateUser((options, user) => {
  const firstName = user.services.facebook.first_name;
  const lastName = user.services.facebook.last_name.substring(0,1);
  const userName = firstName + " " + lastName;
  return Object.assign({}, user, {userName});
});

Meteor.startup(() => {
  const totalFeeds = Feeds.find({}).count();
  if(totalFeeds === 0) {
    feedsMockData.map((feed) => {
      Feeds.insert(feed);
      return true;
    });

    console.log("Added some feeds mockdata to you!");
  }
});
