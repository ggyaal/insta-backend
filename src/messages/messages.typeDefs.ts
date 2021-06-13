import { gql } from "apollo-server-express";

export default gql`
  type Message {
    id: Int!
    user: User!
    payload: String!
    room: Room!
    createdAt: String!
    updatedAt: String!
  }

  type Room {
    id: Int!
    users: [User]!
    messages(last: Int): [Message]!
    totalUser: Int!
    unRead: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
