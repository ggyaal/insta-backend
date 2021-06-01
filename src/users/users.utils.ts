import * as jwt from "jsonwebtoken";
import client from "../client";
import { Context, Resolver } from "../types";

export const getUser = async (token?: string) => {
  try {
    if (!token) return null;
    const verifiedToken: any = await jwt.verify(token, process.env.SECRET_KEY);
    if ("id" in verifiedToken) {
      const user = await client.user.findUnique({
        where: { id: verifiedToken["id"] },
      });
      if (user) return user;
    } else return null;
  } catch {
    return null;
  }
};

export const protectedResolver =
  (resolver: Resolver) => (root, args, context: Context, info) => {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "did not login.",
      };
    }
    return resolver(root, args, context, info);
  };

export const existedUser = async (username: string): Promise<boolean> => {
  const existedCount = await client.user.count({ where: { username } });
  return Boolean(existedCount);
};
