"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_routes_config_1 = __importDefault(require("../common/common.routes.config"));
const DLController_1 = __importDefault(require("../controllers/DLController"));
class DownloaderRoutes extends common_routes_config_1.default {
    constructor(app) {
        super(app, 'TiktokRoutes');
        this.controller = new DLController_1.default();
    }
    configureRoutes() {
        this.app.post('/api/v1/downloader/video', (req, res) => {
            if (!req.body || !req.body.videoAddress)
                return res.status(400);
            console.log(req.body.videoAddress);
            this.controller.fetchVideoByAddress(req.body.videoAddress)
                .then((result) => res.status(200).json(result))
                .catch((e) => res.status(400));
        });
        return this.app;
    }
}
exports.default = DownloaderRoutes;
