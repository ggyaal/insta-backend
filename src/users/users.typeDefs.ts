import { gql } from "apollo-server-express";

export default gql`
  type Result {
    ok: Boolean!
    token: String
    error: String
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
  }

  type UsersResult {
    ok: Boolean!
    error: String
    users: [User]
    totalPages: Int
  }

  type Query {
    users: [User]
  }
`;
