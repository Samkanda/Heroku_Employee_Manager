const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
var cors = require('cors');
const { App } = require('react-bootstrap-icons');
require('dotenv').config();
const serverless = require('serverless-http')


const port = process.env.PORT || 5000;

 
//Middlewares
app.use(cors());
app.use(express.json()); // check this issue
app.use(express.urlencoded({extended: false}));



//Routes
app.get('/', (req, res) => {
});

//Connect To DB
mongoose.connect(process.env.MONGO_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected TO Db!')
);

const usersRouter = require('./backend/routes/users')
app.use('/users', usersRouter)


app.listen(5000)
