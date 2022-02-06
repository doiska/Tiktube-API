import CommonRoutesConfig from "../common/common.routes.config";
import { Application, Request, Response } from 'express';
import DLController from "../controllers/DLController";

export default class DownloaderRoutes extends CommonRoutesConfig {
    
    private controller: DLController;

    constructor(app: Application) {
        super(app, 'TiktokRoutes');
        this.controller = new DLController();
    }

    configureRoutes(): Application {
        this.app.post('/api/v1/downloader/video', (req: Request, res: Response) => {

            if (!req.body || !req.body.videoAddress)
                return res.status(400);

            this.controller.fetchVideoByAddress(req.body.videoAddress)
                .then((result) => res.status(200).json(result))
                .catch((e) => res.status(400))
        })
        return this.app;
    }
}