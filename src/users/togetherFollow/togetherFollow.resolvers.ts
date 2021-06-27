import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    togetherFollow: protectedResolver(
      (_, { username }, { loggedInUser, client }) =>
        client.user.findMany({
          where: {
            AND: [
              { following: { some: { username } } },
              { followers: { some: { username: loggedInUser.username } } },
            ],
          },
        })
    ),
  },
};

export default resolvers;
