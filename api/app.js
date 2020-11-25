
const express = require('express')
const app = express()
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

var { url } = require("./config/connectDB");
var characters = require('./container/characters/controllers/character_controller');
var users = require('./container/user/controllers/user_controller');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   autoIndex: false,
   useFindAndModify: false,
   useCreateIndex: true,
 });


 app.use('/characters', characters);
 app.use('/users', users);

app.listen(5000, () => {
   console.log('App listening on port 5000')
})