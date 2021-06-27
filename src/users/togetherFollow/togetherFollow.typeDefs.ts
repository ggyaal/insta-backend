import { gql } from "apollo-server-express";

export default gql`
  type Query {
    togetherFollow(username: String!): [User]
  }
`;
