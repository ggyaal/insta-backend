import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    following: protectedResolver(
      async (_, { username }, { loggedInUser, client }) => {
        const existUser = await client.user.findUnique({ where: { username } });
        if (!existUser) {
          return { ok: false, error: "Not exist User" };
        }
        await client.user.update({
          where: { id: loggedInUser.id },
          data: { following: { connect: { username } } },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
