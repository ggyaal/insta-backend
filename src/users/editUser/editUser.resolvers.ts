import * as bcrypt from "bcrypt";
import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";
import { uploadPhoto } from "../../shared/shared.utils";

const resolvers: Resolvers = {
  Mutation: {
    editUser: protectedResolver(
      async (
        _,
        {
          firstName,
          lastName,
          username,
          email,
          bio,
          avatar,
          password: newPassword,
        },
        { loggedInUser, client }
      ) => {
        let avatarUrl = null;
        if (avatar) {
          avatarUrl = await uploadPhoto(avatar, loggedInUser.id);
        }

        let hashingPassword = null;
        if (newPassword) {
          hashingPassword = await bcrypt.hash(newPassword, 10);
        }
        const updatedUser = await client.user.update({
          where: { id: loggedInUser.id },
          data: {
            firstName,
            lastName,
            username,
            email,
            bio,
            ...(newPassword && { password: hashingPassword }),
            ...(avatarUrl && { avatar: avatarUrl }),
          },
        });

        if (updatedUser.id) {
          return { ok: true };
        } else {
          return { ok: false, error: "Can't Updated User." };
        }
      }
    ),
  },
};

export default resolvers;
