import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    seePhotoLike: async (_, { id }, { client }) => {
      const likes = await client.like.findMany({
        where: { photoId: id },
        select: { userId: true },
      });
      return likes.map((like) => like.userId);
    },
  },
};

export default resolvers;
