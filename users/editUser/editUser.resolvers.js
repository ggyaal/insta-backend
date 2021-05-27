import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    editUser: async (
      _,
      { firstName, lastName, username, email, password: newPassword },
      { loggedInUser }
    ) => {
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
          ...(newPassword && { password: hashingPassword }),
        },
      });

      if (updatedUser.id) {
        return { ok: true };
      } else {
        return { ok: false, error: "Can't Updated User." };
      }
    },
  },
};
