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

type Location {
  name: String!,
  lat: Float!,
  lng: Float!
}

type FlipFlop {
  userId: String!,
  type: String!,
}

type Follow {
  userId: String
}


type Post {
  _id: ID,
  type: String!,
  message: String!,
  handle: String!,
  timestamp: Int!,
  seenBy: [String]!,
  userId: String!,
  votes: [FlipFlop]!
}

type Query {
  posts(own: Boolean, userId: String): [Post]!,
  currentUser: User!,
  users:[User]!
}

type Mutation {
  addPost(type: String!, message: String!): Post!,
  addVote(type: String!, userId: String!, postId: String!): FlipFlop!
  follow(userId: String!, ownId: String!): Follow
}

schema {
  query: Query,
  mutation: Mutation,
}


`;
