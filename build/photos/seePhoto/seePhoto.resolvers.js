"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        seePhoto: function (_, _a, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.photo.findUnique({ where: { id: id } });
        },
    },
};
exports.default = resolvers;
