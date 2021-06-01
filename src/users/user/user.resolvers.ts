import { Resolvers } from "../../types";

const resolver: Resolvers = {
  Query: {
    user: (_, { username }, { client }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
};

export default resolver;
