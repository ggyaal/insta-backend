import { withFilter } from "apollo-server-express";
import { NEW_MESSAGE } from "../../constants";
import { Context, SubScriptionResolvers } from "../../types";

const resolvers: SubScriptionResolvers = {
  Subscription: {
    roomUpdates: {
      subscribe: async (root, args, ctx, info) => {
        const room = await ctx.client.room.findUnique({
          where: { id: args.id },
          select: { id: true },
        });

        if (!room) {
          throw new Error("You shall not see this");
        }

        return withFilter(
          () => ctx.pubSub.asyncIterator(NEW_MESSAGE),
          async (
            { roomUpdates },
            { id },
            { loggedInUser, client }: Context
          ) => {
            if (roomUpdates.roomId === id) {
              const room = await client.room.findFirst({
                where: {
                  id,
                  users: {
                    some: {
                      id: loggedInUser.id,
                    },
                  },
                },
                select: { id: true },
              });

              if (!room) return false;
              return true;
            } else {
              return false;
            }
          }
        )(root, args, ctx, info);
      },
    },
  },
};

export default resolvers;
