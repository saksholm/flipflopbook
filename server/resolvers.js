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
      return Meteor.users.find({},{fields:{username:1,profile:1}}).fetch();
    }
  },
  Mutation: {
    addPost(obj, args, context) {
      const newPost = {type: args.type, handle: context.user.userName, message: args.message, userId: context.user._id};

      return context.Posts.addPost(newPost);
    },
    addVote(obj, args, context) {
      const newVote = {type: args.type, postId: args.postId, userId: context.user._id };
      return context.Posts.addVote(newVote);
    }
  }
}

export default resolvers;
