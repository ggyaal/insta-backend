require("dotenv").config();
import http from "http";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import client from "./client";
import { getUser } from "./users/users.utils";
import pubSub from "./pubsub";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async (ctx) => {
    if (ctx.req) {
      const {
        req: { headers },
      } = ctx;
      return {
        loggedInUser: await getUser(headers.token as string),
        client,
        pubSub,
      };
    } else {
      const {
        connection: { context },
      } = ctx;

      return {
        loggedInUser: context.loggedInUser,
        client,
        pubSub,
      };
    }
  },
  subscriptions: {
    onConnect: async ({ token }: { token?: string }) => {
      if (!token) {
        throw new Error("You can't listen.");
      }
      const loggedInUser = await getUser(token);
      return {
        loggedInUser,
      };
    },
  },
});

const app = express();

// app.use(logger("tiny"));
app.use("/static", express.static("uploads"));

apollo.applyMiddleware({ app });

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT} 🚀`);
});
