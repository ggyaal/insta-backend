import client from "../client";

export default {
  Query: {
    users: () => client.user.findMany(),
    user: (_, { username }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
};
