import { Resolvers } from "../types";

const resolvers: Resolvers = {
  User: {
    totalFollowers: ({ id }, _, { client }) =>
      client.user.count({ where: { following: { some: { id } } } }),
    totalFollowing: ({ id }, _, { client }) =>
      client.user.count({ where: { followers: { some: { id } } } }),
    isMe: ({ id }, _, { loggedInUser }) => {
      return id === loggedInUser?.id;
    },
    isFollowed: async ({ id }, _, { loggedInUser, client }) => {
      if (!loggedInUser) return false;
      const exist = await client.user.count({
        where: {
          username: loggedInUser.username,
          following: {
            some: {
              id,
            },
          },
        },
      });
      return Boolean(exist);
    },
  },
};

export default resolvers;
