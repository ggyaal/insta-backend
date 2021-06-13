"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Photo: {
        user: function (_a, _, _b) {
            var userId = _a.userId;
            var client = _b.client;
            return client.user.findUnique({ where: { id: userId } });
        },
        hashtags: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.hashtag.findMany({ where: { photos: { some: { id: id } } } });
        },
        likes: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.like.count({ where: { photoId: id } });
        },
        comments: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.comment.count({ where: { photoId: id } });
        },
        isMine: function (_a, _, _b) {
            var userId = _a.userId;
            var loggedInUser = _b.loggedInUser;
            return userId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.id);
        },
    },
    Hashtag: {
        photos: function (_a, _b, _c) {
            var id = _a.id;
            var page = _b.page;
            var client = _c.client;
            return client.hashtag
                .findUnique({ where: { id: id } })
                .photos({ take: 5, skip: (page - 1) * 5 });
        },
        totalPhotos: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.photo.count({ where: { hashtags: { some: { id: id } } } });
        },
    },
};
exports.default = resolvers;
