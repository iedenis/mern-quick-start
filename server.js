import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from 'morgan'
import config from './core/config/config.dev'

import router from './routes/cars.route'
import connectToDb from './db/connect'

const port = config.serverPort;
connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log('server started - ', port);
});