import express from 'express';
import cors from 'cors';

import CommonRouteConfig from './common/common.routes.config';
import TiktokRoutes from './routes/downloader.routes.config';

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express();
const routes: Array<CommonRouteConfig> = [];

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => res.send('Welcome!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.push(new TiktokRoutes(app));

app.listen(PORT, () => console.log(`Server now running on ${HOSTNAME}:${PORT}.`));

