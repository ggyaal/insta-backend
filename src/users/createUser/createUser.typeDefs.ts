import { gql } from "apollo-server";

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
