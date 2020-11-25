var User = require("../models/user");

async function registerUser(userName, password) {
  try {
    let user = await User.findOne({ name: userName });
    if (user) {
      return {
        success: false,
        message: "User Exist",
      };
    } else {
      user = new User({ name: userName, password: password });
      await user.save();
    }
    return {
      success: true,
      user: user,
    };
  } catch (e) {
    return {
      success: false,
      message: e,
    };
  }
}
async function loginUser(userName, password) {
  try {
    let user = await User.findOne({ name: userName, password: password });
    if (user) {
      return {
        success: true,
        user: user,
      };
    } else {
      return {
        success: false,
        message: "Wrong userName or password",
      };
    }
  } catch (e) {
    return {
      success: false,
      message: e,
    };
  }
}

module.exports = {
  registerUser,
  loginUser,
};
