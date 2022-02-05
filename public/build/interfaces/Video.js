"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
class Video {
    constructor({ id, text, author, videoUrl, imageUrl, views }) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
        this.views = views !== null && views !== void 0 ? views : 0;
    }
}
exports.Video = Video;
