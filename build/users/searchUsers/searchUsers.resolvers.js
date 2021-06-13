"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        searchUsers: function (_, _a, _b) {
            var term = _a.term;
            var client = _b.client;
            return client.user.findMany({
                where: { username: { contains: term.toLowerCase() } },
            });
        },
    },
};
exports.default = resolvers;
