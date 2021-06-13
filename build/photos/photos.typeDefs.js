"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Photo {\n    id: Int!\n    user: User!\n    file: String!\n    caption: String\n    hashtags: [Hashtag]\n    likes: Int!\n    comments: Int!\n    isMine: Boolean!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Hashtag {\n    id: Int!\n    hashtag: String!\n    photos: [Photo]\n    totalPhotos: Int!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Like {\n    id: Int!\n    photo: Photo!\n    createdAt: String!\n    updatedAt: String!\n  }\n"], ["\n  type Photo {\n    id: Int!\n    user: User!\n    file: String!\n    caption: String\n    hashtags: [Hashtag]\n    likes: Int!\n    comments: Int!\n    isMine: Boolean!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Hashtag {\n    id: Int!\n    hashtag: String!\n    photos: [Photo]\n    totalPhotos: Int!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Like {\n    id: Int!\n    photo: Photo!\n    createdAt: String!\n    updatedAt: String!\n  }\n"])));
var templateObject_1;
