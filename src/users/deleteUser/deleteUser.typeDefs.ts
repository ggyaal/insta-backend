import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deleteUser(username: String!): Result!
  }
`;
