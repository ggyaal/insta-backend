import client from "../../client";

export default {
  Query: {
    user: (_, { username }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
};
