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
//      return Meteor.users.find({},{fields:{username:1,profile:1}}).fetch();
    }
  },
  Mutation: {
    addPost(obj, args, context) {
      const {lat, lng} = args;
      const location = {lat, lng};
      const newPost = {type: args.type, handle: context.user.userName, message: args.message, userId: context.user._id, location};

      return context.Posts.addPost(newPost);
    }
  }
}

export default resolvers;
