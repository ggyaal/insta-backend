"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Result {\n    ok: Boolean!\n    error: String\n  }\n\n  type UsersResult {\n    ok: Boolean!\n    error: String\n    users: [User]\n    totalPages: Int\n  }\n\n  type PhotoResult {\n    ok: Boolean!\n    error: String\n    photo: Photo\n    photos: [Photo]\n  }\n"], ["\n  type Result {\n    ok: Boolean!\n    error: String\n  }\n\n  type UsersResult {\n    ok: Boolean!\n    error: String\n    users: [User]\n    totalPages: Int\n  }\n\n  type PhotoResult {\n    ok: Boolean!\n    error: String\n    photo: Photo\n    photos: [Photo]\n  }\n"])));
var templateObject_1;