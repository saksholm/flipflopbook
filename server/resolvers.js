const resolvers = {
  Query: {
    feeds(obj, args, context) {
      return context.Feeds.getFeed();
    }
  },
  Mutation: {
    addFeed(obj, args, context) {
      const newFeed = {type: args.type, handle: context.user.handle, message: args.message};

      return context.Feeds.addFeed(newFeed);
    }
  }
}

export default resolvers;
