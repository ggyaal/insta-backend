import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    searchUsers: (_, { term }, { client }) =>
      client.user.findMany({
        where: { username: { contains: term.toLowerCase() } },
      }),
  },
};

export default resolvers;
