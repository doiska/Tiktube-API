"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const downloader_routes_config_1 = __importDefault(require("./routes/downloader.routes.config"));
const https = __importStar(require("https"));
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = express_1.default();
const routes = [];
app.use(cors_1.default());
app.get('/', (req, res) => res.send('Welcome!'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post('/api/v1/download', (req, res) => {
    const { fileName, url } = req.body;
    const externalReq = https.request(url, (externalres) => {
        res.setHeader('content-disposition', `attachment; filename=${fileName}`);
        if (externalres.headers["content-type"])
            res.setHeader('content-type', externalres.headers["content-type"]);
        if (externalres.headers["content-length"])
            res.setHeader('content-length', externalres.headers["content-length"]);
        externalres.pipe(res);
    });
    externalReq.end();
});
routes.push(new downloader_routes_config_1.default(app));
app.listen(PORT, () => console.log(`Server now running on ${HOSTNAME}:${PORT}.`));
