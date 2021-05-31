import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editUser(
      firstName: String
      lastName: String
      username: String
      email: String
      bio: String
      avatar: Upload
      password: String
    ): Result!
  }
`;
