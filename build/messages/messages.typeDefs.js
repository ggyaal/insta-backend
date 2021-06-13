"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Message {\n    id: Int!\n    user: User!\n    payload: String!\n    room: Room!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Room {\n    id: Int!\n    users: [User]!\n    messages(last: Int): [Message]!\n    totalUser: Int!\n    unRead: Int!\n    createdAt: String!\n    updatedAt: String!\n  }\n"], ["\n  type Message {\n    id: Int!\n    user: User!\n    payload: String!\n    room: Room!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Room {\n    id: Int!\n    users: [User]!\n    messages(last: Int): [Message]!\n    totalUser: Int!\n    unRead: Int!\n    createdAt: String!\n    updatedAt: String!\n  }\n"])));
var templateObject_1;
