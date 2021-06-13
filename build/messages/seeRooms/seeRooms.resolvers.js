"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_utils_1 = require("../../users/users.utils");
var resolvers = {
    Query: {
        seeRooms: users_utils_1.protectedResolver(function (_, __, _a) {
            var loggedInUser = _a.loggedInUser, client = _a.client;
            return client.room.findMany({
                where: {
                    users: {
                        some: {
                            id: loggedInUser.id,
                        },
                    },
                },
            });
        }),
    },
};
exports.default = resolvers;
