import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import path from 'path'

import {default as studentRoutes} from '../app/Student/student.routes';

export default ()=>{
    let app = express();
   
    app.use(bodyParser.json({limit: "5mb"}));
    app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
   // app.use(passport.initialize());
    //strategies.user(passport);
    app.use(cors());
   // app.use(express.static('./Uploads'))
    //app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ limit: "5mb", extended: false }));
    app.use(bodyParser.json({limit: "5mb"}));
   // app.use(passport.initialize());
   // strategies.user(passport);
  
    app.use("/", studentRoutes);
    
    return app;
}