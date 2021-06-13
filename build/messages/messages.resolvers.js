"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Message: {
        user: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.message.findUnique({ where: { id: id } }).user();
        },
        room: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.message.findUnique({ where: { id: id } }).room();
        },
    },
    Room: {
        users: function (_a, _, _b) {
            var id = _a.id;
            var loggedInUser = _b.loggedInUser, client = _b.client;
            if (!loggedInUser)
                return null;
            return client.user.findMany({
                where: { rooms: { some: { id: id } } },
            });
        },
        messages: function (_a, _b, _c) {
            var id = _a.id;
            var last = _b.last;
            var loggedInUser = _c.loggedInUser, client = _c.client;
            if (!loggedInUser)
                return null;
            return client.message.findMany(__assign({ where: { room: { id: id } }, take: 5, skip: last ? 1 : 0 }, (last && { cursor: { id: last } })));
        },
        totalUser: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.user.count({ where: { rooms: { some: { id: id } } } });
        },
        unRead: function (_a, _, _b) {
            var id = _a.id;
            var loggedInUser = _b.loggedInUser, client = _b.client;
            return client.message.count({
                where: { readed: false, roomId: id, userId: { not: loggedInUser.id } },
            });
        },
    },
};
exports.default = resolvers;
