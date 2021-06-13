import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    readMessage: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
        const message = await client.message.findFirst({
          where: {
            id,
            userId: {
              not: loggedInUser.id,
            },
            room: {
              users: {
                some: {
                  id: loggedInUser.id,
                },
              },
            },
          },
          select: { id: true },
        });
        if (!message) return { ok: false, error: "Not Founded Message." };
        await client.message.update({
          where: { id: message.id },
          data: { readed: true },
        });
        return { ok: true };
      }
    ),
  },
};

export default resolvers;
