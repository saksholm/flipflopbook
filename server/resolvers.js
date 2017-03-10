const resolvers = {
  Query: {
    posts(obj, args, context) {
      return context.Posts.getPosts();
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
