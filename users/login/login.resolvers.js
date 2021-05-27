import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
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
