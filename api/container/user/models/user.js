var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({

  name: {
    type: String,
    default: ''
  },
  password:{
      type:String,
      default:''
  },
  role:{
    type:String,
    default:'user'
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
