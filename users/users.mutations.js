import jwt from "jsonwebtoken";
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
    login: async (_, { username, password }) => {
      const user = await client.user.findUnique({ where: { username } });
      if (!user) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect Password.",
        };
      }
      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
