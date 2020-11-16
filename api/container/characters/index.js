var { url } = require('../../config/connectDB');
var mongoose = require('mongoose');
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
var Character = require('./models/character');

var docs = [
 
];

Character.find({}, function (err, data) {
  if (!data[0]) {
    Character.insertMany(docs);
    console.log("insert Character successful !");
  } else {
    Character.collection.drop();
    Character.insertMany(docs);
    console.log("delete and insert Character successful !");
  }
});