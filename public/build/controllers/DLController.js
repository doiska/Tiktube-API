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
const Video_1 = require("../interfaces/Video");
class DLController {
    constructor() {
        (() => __awaiter(this, void 0, void 0, function* () {
            // await YTDlpWrap.downloadFromGithub();
            this.downloader = new yt_dlp_wrap_1.default('./yt-dlp.exe');
            if (!this.downloader)
                return console.log(`Could'nt instanciate YTDLWrapper`);
        }))();
    }
    fetchVideoByAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`Address ${address}`);
                const result = yield this.downloader.getVideoInfo(address);
                const { id, title, uploader, url, thumbnail, view_count } = result;
                console.log(title);
                return new Video_1.Video({
                    id,
                    text: title,
                    author: { name: uploader },
                    videoUrl: url,
                    imageUrl: thumbnail,
                    views: view_count
                });
            }
            catch (error) {
                console.log(error);
                return 'Não foi possível processar o vídeo.';
            }
        });
    }
}
exports.default = DLController;
