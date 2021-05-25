import bcrypt from "bcrypt";
import client from "../client";

export default {
  Mutation: {
    createUser: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });
        if (existingUser) {
          throw new Error("This username/email is already taken.");
        }
        const hashingPassword = await bcrypt.hash(password, 10);
        return client.user.create({
          data: {
            firstName,
            lastName,
            username,
            email,
            password: hashingPassword,
          },
        });
      } catch (e) {
        return e;
      }
    },
    deleteUser: (_, { username }) =>
      client.user.delete({ where: { username } }),
  },
};
