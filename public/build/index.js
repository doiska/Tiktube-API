"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const downloader_routes_config_1 = __importDefault(require("./routes/downloader.routes.config"));
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = (0, express_1.default)();
const routes = [];
app.use((0, cors_1.default)());
app.get('/', (req, res) => res.send('Welcome!'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
routes.push(new downloader_routes_config_1.default(app));
app.listen(PORT, () => console.log(`Server now running on ${HOSTNAME}:${PORT}.`));
