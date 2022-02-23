"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yt_dlp_wrap_1 = __importDefault(require("yt-dlp-wrap"));
class DLController {
    constructor() {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                yield yt_dlp_wrap_1.default.downloadFromGithub();
                this.downloader = new yt_dlp_wrap_1.default('./yt-dlp');
            }
            catch (e) {
                console.error(e);
            }
        }))();
    }
    fetchVideoByAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.downloader.getVideoInfo(address);
                const { id, title, uploader, url, thumbnail, view_count, formats, height, width, fileName } = result;
                console.log(result);
                return {
                    id,
                    text: title,
                    author: uploader,
                    videoUrl: url,
                    imageUrl: thumbnail,
                    views: view_count,
                    formats: formats,
                    height: height,
                    width: width,
                    fileName: fileName
                };
            }
            catch (error) {
                console.log(error);
                return 'Não foi possível processar o vídeo.';
            }
        });
    }
}
exports.default = DLController;
