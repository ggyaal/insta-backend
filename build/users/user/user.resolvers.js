"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolver = {
    Query: {
        user: function (_, _a, _b) {
            var username = _a.username;
            var client = _b.client;
            return client.user.findUnique({
                where: { username: username },
            });
        },
    },
};
exports.default = resolver;
