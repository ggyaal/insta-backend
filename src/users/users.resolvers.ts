import { Resolvers } from "../types";

const resolvers: Resolvers = {
  User: {
    photos: ({ id }, { offset }, { client }) =>
      client.photo.findMany({
        take: 5,
        where: { userId: id },
        skip: offset ? offset : 0,
      }),
    totalFollowers: ({ id }, _, { client }) =>
      client.user.count({ where: { following: { some: { id } } } }),
    totalFollowing: ({ id }, _, { client }) =>
      client.user.count({ where: { followers: { some: { id } } } }),
    isMe: ({ id }, _, { loggedInUser }) => id === loggedInUser?.id,
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
