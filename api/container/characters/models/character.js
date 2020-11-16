var mongoose = require("mongoose");

var CharacterSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  team: {
    type: String,
    default: ''
  },
  intro: {
    type: String,
    default: ''
  },
  infor: {
    type: Array,
    default: []
  },
  fate: {
    type: Array,
    default: []
  },
  passive1: {
    type: Array,
    default: []
  },
  passive2: {
    type: Array,
    default: []
  },
  skill: {
    type: Array,
    default: []
  },
  
 
}, {
  versionKey: false
});

var Character = mongoose.model("Pet", CharacterSchema);
module.exports = Character;
