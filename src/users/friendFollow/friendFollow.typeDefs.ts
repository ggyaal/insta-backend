import { gql } from "apollo-server-express";

export default gql`
  type Query {
    friendFollow(username: String!): [User]
  }
`;
