export default`

type User {
    _id: String!,
    firstName: String,
    lastName: String!,
    username: String!
    image: String!,
    facebookID: String!,
    location: Location,
    followee: [String]!,
    followers: [String]!
}

type Location{
  name: String!,
  lat: Float!,
  lng: Float!
}

type Post {
  _id: ID,
  type: String!,
  message: String!,
  handle: String!,
  timestamp: Int!,
  seenBy: [String]!,
  userId: String!
}

type Query {
  posts: [Post]!,
  currentUser: User!,
  users:[User]!
}

type Mutation {
  addPost(type: String!, message: String!): Post!
}

schema {
  query: Query,
  mutation: Mutation,
}


`;
