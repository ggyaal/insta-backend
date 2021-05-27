import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): Result!
  }
`;
