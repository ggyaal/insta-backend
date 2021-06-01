import { User } from ".prisma/client";
import { Resolvers } from "../../types";
import { existedUser } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    seeFollowers: async (_, { username, lastId }, { client }) => {
      if (!(await existedUser(username)))
        return { ok: false, error: "Don't exist User" };
      const followers: User[] = await client.user
        .findUnique({ where: { username } })
        .followers({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }), // cursor-based pagination
        });
      return { ok: true, users: followers };
    },
  },
};

export default resolvers;
