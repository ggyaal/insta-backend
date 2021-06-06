import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    likePhoto: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
        const photo = await client.photo.count({
          where: { id },
        });
        if (!photo) return { ok: false, error: "Don't Existed Photo." };
        const liked = await client.like.findUnique({
          where: { userId_photoId: { userId: loggedInUser.id, photoId: id } },
        });
        if (liked) {
          await client.like.delete({
            where: { userId_photoId: { userId: loggedInUser.id, photoId: id } },
          });
        } else {
          await client.like.create({
            data: {
              user: { connect: { id: loggedInUser.id } },
              photo: { connect: { id } },
            },
          });
        }
        return { ok: true };
      }
    ),
  },
};

export default resolvers;
