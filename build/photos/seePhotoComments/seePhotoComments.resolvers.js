"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        seePhotoComments: function (_, _a, _b) {
            var id = _a.id, page = _a.page;
            var client = _b.client;
            return client.comment.findMany({
                where: { photoId: id },
                take: 5,
                skip: (page - 1) * 5,
                orderBy: { createdAt: "asc" },
            });
        },
    },
};
exports.default = resolvers;
