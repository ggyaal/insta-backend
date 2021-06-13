"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashtags = void 0;
var getHashtags = function (caption) {
    var hashtags = caption.match(/#[\w]+/g) || [];
    return hashtags.map(function (hashtag) { return ({
        where: { hashtag: hashtag },
        create: { hashtag: hashtag },
    }); });
};
exports.getHashtags = getHashtags;
