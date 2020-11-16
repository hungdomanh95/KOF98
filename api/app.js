
const express = require('express')
const app = express()
var mongoose = require("mongoose");
var cors = require('cors')
app.use(cors())

var { url } = require("./config/connectDB");

mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   autoIndex: false,
   useFindAndModify: false,
   useCreateIndex: true,
 });


app.listen(5000, () => {
   console.log('App listening on port 5000')
})