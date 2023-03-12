const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');
const leaderboardRoutes = require('./routes/leaderboard');
const profileRoutes = require('./routes/profile');
const eventRoutes = require('./routes/event');


//import { express } from 'express';
//import { bodyParser} from 'body-parser';
//import {authRoutes} from './routes/auth';
//import {errorController} from './controllers/error';

const app = express();
const  port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-MEthods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/profile', profileRoutes);
app.use('/event', eventRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(port,()=>console.log(`Listening on port ${port}`));
