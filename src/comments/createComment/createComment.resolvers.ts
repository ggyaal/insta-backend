import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    createComment: protectedResolver(
      async (_, { id, payload }, { loggedInUser, client }) => {
        const photo = client.photo.findUnique({
          where: { id },
          select: { id: true },
        });
        if (!photo) return { ok: true, error: "Don't existed Photo." };
        const newComment = await client.comment.create({
          data: {
            payload,
            user: { connect: { id: loggedInUser.id } },
            photo: { connect: { id } },
          },
        });
        return { ok: true, id: newComment.id };
      }
    ),
  },
};

export default resolvers;
