import express from 'express';
import cors from 'cors';

import CommonRouteConfig from './common/common.routes.config';
import TiktokRoutes from './routes/downloader.routes.config';
import * as http from "http";
import * as https from "https";

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express();
const routes: Array<CommonRouteConfig> = [];

app.use(cors())

app.get('/', (req, res) => res.send('Welcome!'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/v1/download', (req, res) => {


    const {fileName, url} = req.body;

    const externalReq = https.request(url, (externalres) => {

        res.setHeader('content-disposition', `attachment; filename=${fileName}`);

        if (externalres.headers["content-type"])
            res.setHeader('content-type', externalres.headers["content-type"]);

        if (externalres.headers["content-length"])
            res.setHeader('content-length', externalres.headers["content-length"])

        externalres.pipe(res)
    })

    externalReq.end();
})

routes.push(new TiktokRoutes(app));

app.listen(PORT, () => console.log(`Server now running on ${HOSTNAME}:${PORT}.`));

