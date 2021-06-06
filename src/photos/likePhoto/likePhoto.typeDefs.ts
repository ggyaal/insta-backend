import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    likePhoto(id: Int!): Result!
  }
`;
