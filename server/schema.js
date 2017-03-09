export default`

type Feed {
  _id: ID,
  type: String!,
  message: String!,
  handle: String!,
  timestamp: Int!,
  seenBy: [String!]!,
}

type Query {
  feeds: [Feed]!,
}

type Mutation {
  addFeed(type: String!, message: String!): Feed!
}

schema {
  query: Query,
  mutation: Mutation,
}


`;
