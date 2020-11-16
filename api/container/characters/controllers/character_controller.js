var express = require("express");
var router = express.Router();
var character_services = require("../services/character_services");

router.get("/getCharacter", async (req, res) => {
  let characters = await character_services.getAll();
  res.json(characters);
});

module.exports = router