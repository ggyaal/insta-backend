import { gql } from "apollo-server";

export default gql`
  type Query {
    user(username: String!): User
  }
`;
