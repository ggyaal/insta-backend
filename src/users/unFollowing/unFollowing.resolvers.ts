import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Mutation: {
    unFollowing: protectedResolver(
      async (_, { username }, { loggedInUser, client }) => {
        const existedUser = await client.user.findUnique({
          where: { username },
        });
        if (!existedUser) {
          return {
            ok: false,
            error: "Not existed User",
          };
        }
        await client.user.update({
          where: { id: loggedInUser.id },
          data: { following: { disconnect: { username } } },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};

export default resolvers;
