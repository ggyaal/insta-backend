import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    following(username: String!): Result!
  }
`;
