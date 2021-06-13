"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Comment: {
        user: function (_a, _, _b) {
            var userId = _a.userId;
            var client = _b.client;
            return client.user.findUnique({ where: { id: userId } });
        },
    },
};
exports.default = resolvers;
