import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import schema from './schema';
import resolvers from './resolvers';
import FeedsRepository from './connectors';


const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

createApolloServer({
  schema: executableSchema,
  context: {
    Feeds: new FeedsRepository(),
  }
});
