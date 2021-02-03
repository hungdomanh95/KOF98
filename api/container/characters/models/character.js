var mongoose = require("mongoose");

var CharacterSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: false
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
    type: Object,
    default: {}
  },
  passive2: {
    type: Object,
    default: {}
  },
  skill: {
    type: Object,
    default: {}
  },
  ultimate: {
    type: Object,
    default: {}
  },
  thunderElement: {
    type: Array,
    default: []
  },
  waterElement: {
    type: Array,
    default: []
  },
  strongest: {
    type: Array,
    default: []
  },
  weakness: {
    type: Array,
    default: []
  },
  recommend: {
    type: String,
    default: ''
  },
}, {
  versionKey: false
});

var Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
