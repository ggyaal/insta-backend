import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeFollowers(username: String!, lastId: Int): UsersResult!
  }
`;
