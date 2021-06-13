import { NEW_MESSAGE } from "../../constants";
import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    sendMessage: protectedResolver(
      async (
        _,
        { payload, roomId, userId },
        { loggedInUser, client, pubSub }
      ) => {
        let room = null;
        if (userId) {
          const sentUser = await client.user.findUnique({
            where: { id: userId },
            select: { id: true },
          });
          if (!sentUser) return { ok: false, error: "Not Founded User." };

          if (!room) {
            room = await client.room.create({
              data: {
                users: {
                  connect: [{ id: loggedInUser.id }, { id: userId }],
                },
              },
            });
          }
        } else if (roomId) {
          room = await client.room.findUnique({
            where: { id: roomId },
          });
          if (!room) return { ok: false, error: "Not Founded Room." };
        }
        const message = await client.message.create({
          data: {
            payload,
            user: { connect: { id: loggedInUser.id } },
            room: { connect: { id: room.id } },
          },
        });

        pubSub.publish(NEW_MESSAGE, { roomUpdates: { ...message } });

        return { ok: true };
      }
    ),
  },
};

export default resolvers;
