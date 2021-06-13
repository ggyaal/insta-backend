import { PrismaClient } from ".prisma/client";
import { User } from ".prisma/client";
import { PubSub } from "apollo-server-express";

type Context = {
  loggedInUser?: User;
  client: PrismaClient;
  pubSub?: PubSub;
};

export type Result = {
  ok: boolean;
  token?: string;
  error?: string;
  users?: User[];
  totalPages?: number;
};

export type Resolver = (
  root: any,
  args?: any,
  context?: Context,
  info?: any
) => any;

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};

export type SubScriptionResolvers = {
  [key: string]: {
    [key: string]: {
      [key: string]: Resolver;
    };
  };
};

export type PhotoFile = {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: Function;
};
