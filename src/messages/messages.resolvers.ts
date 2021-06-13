import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Message: {
    user: ({ id }, _, { client }) =>
      client.message.findUnique({ where: { id } }).user(),
    room: ({ id }, _, { client }) =>
      client.message.findUnique({ where: { id } }).room(),
  },
  Room: {
    users: ({ id }, _, { loggedInUser, client }) => {
      if (!loggedInUser) return null;
      return client.user.findMany({
        where: { rooms: { some: { id } } },
      });
    },
    messages: ({ id }, { last }, { loggedInUser, client }) => {
      if (!loggedInUser) return null;
      return client.message.findMany({
        where: { room: { id } },
        take: 5,
        skip: last ? 1 : 0,
        ...(last && { cursor: { id: last } }),
      });
    },
    totalUser: ({ id }, _, { client }) =>
      client.user.count({ where: { rooms: { some: { id } } } }),
    unRead: ({ id }, _, { loggedInUser, client }) =>
      client.message.count({
        where: { readed: false, roomId: id, userId: { not: loggedInUser.id } },
      }),
  },
};

export default resolvers;
