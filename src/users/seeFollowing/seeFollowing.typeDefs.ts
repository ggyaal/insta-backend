import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeFollowing(username: String!, page: Int!): UsersResult!
  }
`;
