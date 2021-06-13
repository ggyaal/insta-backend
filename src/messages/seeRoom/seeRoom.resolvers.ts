import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    seeRoom: protectedResolver((_, { id }, { client }) =>
      client.room.findUnique({ where: { id } })
    ),
  },
};

export default resolvers;
