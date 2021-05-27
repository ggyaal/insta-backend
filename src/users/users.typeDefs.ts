import { gql } from "apollo-server";

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
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User]
  }
`;
