import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    user: (_, { username }, { client }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
};

export default resolvers;
