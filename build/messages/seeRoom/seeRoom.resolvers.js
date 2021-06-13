"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_utils_1 = require("../../users/users.utils");
var resolvers = {
    Query: {
        seeRoom: users_utils_1.protectedResolver(function (_, _a, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.room.findUnique({ where: { id: id } });
        }),
    },
};
exports.default = resolvers;
