import {Meteor} from 'meteor/meteor';
import {Feeds} from './collections';
import feedsMockData from './feedsMockData';

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
