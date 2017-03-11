// import { PointObject } from 'graphql-geojson';
import {Meteor} from 'meteor/meteor';

const resolvers = {
//  PointObject: PointObject,
  Query: {
    posts(obj, args, context) {
      return context.Posts.getPosts(args.own, args.userId);
    },
    currentUser(obj, args, context){
      return context.user.profile;
    },
    users(obj, args, context){
      const users =  Meteor.users.find({},{fields:{userName:1,profile:1}}).fetch();

      // small hack to fetch data properly
      return users.map((user) => {
        if(user && user.profile) {
          return { ...user, ...user.profile };
        } else { return null }
      });
    }
  },
  Mutation: {
    addPost(obj, args, context) {
      console.log(args.lat, args.lng);
      const newPost = {type: args.type, handle: context.user.userName, message: args.message, userId: context.user._id};

      return context.Posts.addPost(newPost);
    },
    addVote(obj, args, context) {
      const newVote = {type: args.type, postId: args.postId, userId: context.user._id };
      return context.Posts.addVote(newVote);
    },
    follow(obj, args, context) {
      if(args.userId) {
        const newFollow = {userId: args.userId, ownId: context.user._id};
        return context.Posts.follow(newFollow);
      }
    }
  }
}

export default resolvers;
