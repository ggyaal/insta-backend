import { PrismaClient } from ".prisma/client";
import { User } from ".prisma/client";

type Context = {
  loggedInUser?: User;
  client: PrismaClient;
};

export type Result = {
  ok: boolean;
  token?: string;
  error?: string;
  users?: User[];
  totalPages?: number;
};

export type MutationResolver = (
  root: any,
  args?: any,
  context?: Context,
  info?: any
) => Promise<Result> | Result;

export type Resolver = (
  root: any,
  args?: any,
  context?: Context,
  info?: any
) => Promise<User> | Promise<User[]>;

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver | MutationResolver;
  };
};
