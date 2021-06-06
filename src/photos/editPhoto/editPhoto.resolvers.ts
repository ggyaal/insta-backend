import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { getHashtags } from "../photos.utils";

const resolvers: Resolvers = {
  Mutation: {
    editPhoto: protectedResolver(
      async (_, { id, caption }, { loggedInUser, client }) => {
        const thisPhoto = await client.photo.findFirst({
          where: { id, userId: loggedInUser.id },
          include: { hashtags: { select: { hashtag: true } } },
        });
        if (!thisPhoto) return { ok: false, error: "Not existed Photo" };
        const hashtagObj = getHashtags(caption);
        await client.photo.update({
          where: { id },
          data: {
            caption,
            hashtags: {
              disconnect: thisPhoto.hashtags,
              connectOrCreate: hashtagObj,
            },
          },
        });
        return { ok: true };
      }
    ),
  },
};

export default resolvers;
