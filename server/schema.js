export default`

type Post {
  _id: ID,
  type: String!,
  message: String!,
  handle: String!,
  timestamp: Int!,
  seenBy: [String!]!,
}

type Query {
  posts: [Post]!,
}

type Mutation {
  addPost(type: String!, message: String!): Post!
}

schema {
  query: Query,
  mutation: Mutation,
}


`;
