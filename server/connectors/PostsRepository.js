import {Meteor} from 'meteor/meteor';
import {Posts} from '../collections';
import {currentTimestamp} from '../tools';
import {check} from 'meteor/check';

export default class PostsRepository {
  getPosts(own,userId) {

    // own: true = your own feed.. we dont want to show followees... only your own posts
    // own: false = normal feed
    if(!own && userId) {
      const userProfile = Meteor.users.findOne({_id: userId}, {fields: {profile: 1}});
      const fixedFollowee = [...userProfile.profile.followee, userId];

      const feed = Posts.find({
        type: 'post',
        userId: {$in: fixedFollowee },

      }, {
        sort: {
          timestamp: -1,
        }
      }).fetch();

      return feed;
    }

    if(own && userId) {
      const posts = Posts.find({userId: userId}, {sort: {timestamp: -1}}).fetch();
      return posts;
    }

  }

  addPost(obj) {
    const addObj = {
      type: obj.type,
      message: obj.message,
      handle: obj.handle,
      userId: obj.userId,
      timestamp: currentTimestamp(),
      votes: [],
      seenBy: [],
    };

    const id = Posts.insert(addObj);
    addObj._id = id;

    return addObj;

  }

  addVote(obj) {
    check(obj.postId, String);
    check(obj.userId, String);
    check(obj.type, String);

    if(obj.postId && obj.userId) {
      const verify = Posts.findOne({_id: obj.postId}, {fields: {_id: 1} });

      if(verify._id) {
        const addVote = {
          type: obj.type,
          userId: obj.userId,
        };

        Posts.update({_id: verify._id}, {$push: {votes: addVote }}, {upsert: true, multi:false});

        const returnObj = {
          type: obj.type,
          userId: obj.userId,
        };
        return returnObj;
      }

      return null;
    }
  }

  follow(obj) {
    check(obj.userId, String);
    check(obj.ownId, String);

    const verify = Meteor.users.findOne({_id: obj.userId}, {fields: {_id: 1}});
    if(verify._id) {
      Meteor.users.update({_id: verify._id}, {$push: {"profile.followers": obj.ownId }} );
      Meteor.users.update({_id: obj.ownId}, {$push: {"profile.followee": verify._id }} );
    }

    return {userId: verify._id}

  }
}
