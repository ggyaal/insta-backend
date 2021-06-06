import { gql } from "apollo-server-express";

export default gql`
  type Result {
    ok: Boolean!
    error: String
  }

  type UsersResult {
    ok: Boolean!
    error: String
    users: [User]
    totalPages: Int
  }
`;
