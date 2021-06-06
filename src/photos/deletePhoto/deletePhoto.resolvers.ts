import { deleteFromS3 } from "../../shared/shared.utils";
import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    deletePhoto: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
        const photo = await client.photo.findUnique({
          where: { id },
          select: { userId: true, file: true },
        });
        if (!photo) {
          return { ok: false, error: "Photo Not Found." };
        } else if (photo.userId !== loggedInUser.id) {
          return { ok: false, error: "Not Authorized." };
        } else {
          await client.photo.delete({ where: { id } });
          await deleteFromS3(photo.file, "photos");
          return { ok: true };
        }
      }
    ),
  },
};

export default resolvers;
