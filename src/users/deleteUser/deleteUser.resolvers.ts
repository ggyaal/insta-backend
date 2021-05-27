import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    deleteUser: async (_, { username }, { client }) => {
      const deletedUser = await client.user.delete({ where: { username } });
      if (deletedUser.id) {
        return { ok: true };
      } else {
        return { ok: false, error: "Can't Deleted User." };
      }
    },
  },
};

export default resolvers;
