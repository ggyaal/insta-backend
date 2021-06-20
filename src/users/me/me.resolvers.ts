import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    me: protectedResolver((_, __, { loggedInUser, client }) =>
      client.user.findUnique({ where: { id: loggedInUser.id } })
    ),
  },
};

export default resolvers;
