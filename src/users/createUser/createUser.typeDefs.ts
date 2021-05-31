import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createUser(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
    ): Result!
  }
`;
