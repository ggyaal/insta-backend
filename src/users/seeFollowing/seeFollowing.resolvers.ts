import { User } from ".prisma/client";
import { Resolvers, Result } from "../../types";
import { existedUser } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    seeFollowing: async (
      _,
      { username, page },
      { client }
    ): Promise<Result> => {
      if (!(await existedUser(username)))
        return { ok: false, error: "Can't exist User" };
      const following: User[] = await client.user
        .findUnique({ where: { username } })
        .following({ take: 5, skip: (page - 1) * 5 }); // offset-based pagination
      const totalPages = await client.user.count({
        where: { following: { some: { username } } },
      });
      return {
        ok: true,
        users: following,
        totalPages: Math.ceil(totalPages / 5),
      };
    },
  },
};

export default resolvers;
