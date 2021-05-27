import client from "../client";

export default {
  Query: {
    users: () => client.user.findMany(),
  },
};
