import client from "../../client";

export default {
  Mutation: {
    deleteUser: async (_, { username }) => {
      const deletedUser = await client.user.delete({ where: { username } });
      if (deletedUser.id) {
        return { ok: true };
      } else {
        return { ok: false, error: "Can't Deleted User." };
      }
    },
  },
};
