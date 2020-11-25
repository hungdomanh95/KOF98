var express = require("express");
var router = express.Router();
var user_services = require("../services/user_services");


router.post("/register", async (req, res) => {
  const userName = req.body.userName
  const password = req.body.password
  let user = await user_services.registerUser(userName,password);
  // console.log('user: ', user);
  res.json(user);
});
router.post("/login", async (req, res) => {
  const userName = req.body.userName
  const password = req.body.password
  let user = await user_services.loginUser(userName,password);
  // console.log('user: ', user);
  res.json(user);
});


module.exports = router