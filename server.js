const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
var cors = require('cors');
const { App } = require('react-bootstrap-icons');
require('dotenv').config();
const port = process.env.PORT || 5000;



 
//Middlewares
app.use(cors());
app.use(express.json());
// const postsRoute = require('./routes/posts')
// app.use('./posts', postsRoute)



//Routes
app.get('/', (req, res) => {
    res.send('Hiff')
});

//Connect To DB
mongoose.connect(process.env.MONGO_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected TO Db!')
);

const usersRouter = require('./backend/routes/users')
app.use('/users', usersRouter)
// app.use(express.static(path.join(__dirname, 'build')))


app.listen(5000)
// export default app