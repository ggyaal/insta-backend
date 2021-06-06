import { gql } from "apollo-server-express";

export default gql`
  type Result {
    ok: Boolean!
    error: String
  }

  type UsersResult {
    ok: Boolean!
    error: String
    users: [User]
    totalPages: Int
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    bio: String
    avatar: String
    createdAt: String!
    updatedAt: String!
    followers: [User]
    following: [User]
    totalFollowers: Int!
    totalFollowing: Int!
    isMe: Boolean!
    isFollowed: Boolean!
  }
`;
