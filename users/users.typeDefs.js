import { gql } from "apollo-server";

export default gql`
  type LoginResult {
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
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
    ): User
    deleteUser(username: String!): User
    login(username: String!, password: String!): LoginResult!
  }
`;
