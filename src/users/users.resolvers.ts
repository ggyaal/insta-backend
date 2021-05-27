import client from "../client";
import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Query: {
    users: () => client.user.findMany(),
  },
};

export default resolvers;
