import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createUser: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [{ username }, { email }],
        },
      });
      if (existingUser) {
        return { ok: false, error: "This username/email is already taken." };
      }
      const hashingPassword = await bcrypt.hash(password, 10);
      const createdUser = await client.user.create({
        data: {
          firstName,
          lastName,
          username,
          email,
          password: hashingPassword,
        },
      });

      if (createdUser.id) {
        return { ok: true };
      } else {
        return { ok: false, error: "Can't Created User." };
      }
    },
  },
};
