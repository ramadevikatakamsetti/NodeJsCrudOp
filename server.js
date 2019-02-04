import {dbConfig} from './config/env/development';
import { default as express} from './config/express';
import {default as mongoose} from './config/mongoose';
import path from 'path';

const app = express();
const db = mongoose();

global.appRoot = require('path').resolve(__dirname);

app.listen( dbConfig.port, ()=>{
    console.log("Server listening to port:", dbConfig.port);
})

export {app};