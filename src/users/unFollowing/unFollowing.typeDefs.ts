import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    unFollowing(username: String!): Result!
  }
`;
