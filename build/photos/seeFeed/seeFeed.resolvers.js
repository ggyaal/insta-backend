"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_utils_1 = require("../../users/users.utils");
var resolvers = {
    Query: {
        seeFeed: users_utils_1.protectedResolver(function (_, __, _a) {
            var loggedInUser = _a.loggedInUser, client = _a.client;
            return client.photo.findMany({
                where: {
                    OR: [
                        { user: { followers: { some: { id: loggedInUser.id } } } },
                        { userId: loggedInUser.id },
                    ],
                },
                orderBy: { createdAt: "desc" },
            });
        }),
    },
};
exports.default = resolvers;
