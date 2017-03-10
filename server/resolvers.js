// import { PointObject } from 'graphql-geojson';

const resolvers = {
//  PointObject: PointObject,
  Query: {
    posts(obj, args, context) {
      return context.Posts.getPosts();
    },
    currentUser(obj, args, context){
      console.log("user in resolvers", context.user)
      return context.user.profile;
    }
  },
  Mutation: {
    addPost(obj, args, context) {
      const newPost = {type: args.type, handle: context.user.userName, message: args.message};

      return context.Posts.addPost(newPost);
    }
  }
}

export default resolvers;
