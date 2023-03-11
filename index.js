const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./Backend/routes/auth');
const errorController = require('./Backend/controllers/error');
const  port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin','*');
    res.setHeader('Acess-Control-Allow-MEthods','GET,POST,PUT,DELETE');
    res.setHeader('Acess-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use('/auth', authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(port,()=>console.log('Listening on port ${port}'));
