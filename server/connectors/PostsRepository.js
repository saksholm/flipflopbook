import {Meteor} from 'meteor/meteor';
import {Posts} from '../collections';
import {currentTimestamp} from '../tools';

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

    const posts = Posts.find({}, {sort: {timestamp: -1}}).fetch();
    return posts;
  }

  addPost(obj) {
    const addObj = {
      type: obj.type,
      message: obj.message,
      handle: obj.handle,
      userId: obj.userId,
      timestamp: currentTimestamp(),
      seenBy: [],
    };

    const id = Posts.insert(addObj);
    addObj._id = id;

    return addObj;

  }
}
