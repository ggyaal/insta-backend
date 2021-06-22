import { gql } from "apollo-server-express";

export default gql`
  type Result {
    ok: Boolean!
    error: String
  }

  type IdResult {
    id: Int!
    ok: Boolean!
    error: String
  }

  type UsersResult {
    ok: Boolean!
    error: String
    users: [User]
    totalPages: Int
  }

  type PhotoResult {
    ok: Boolean!
    error: String
    photo: Photo
    photos: [Photo]
  }
`;
