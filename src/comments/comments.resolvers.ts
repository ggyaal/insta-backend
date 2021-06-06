import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Comment: {
    user: ({ userId }, _, { client }) =>
      client.user.findUnique({ where: { id: userId } }),
  },
};

export default resolvers;
