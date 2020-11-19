var express = require("express");
var router = express.Router();
var character_services = require("../services/character_services");

router.get("/getCharacter", async (req, res) => {
  let characters = await character_services.getAll();
  res.json(characters);
});

router.post("/addCharacter", async (req, res) => {
  const data = req.body.data
  let characters = await character_services.addCharacter(data);
  res.json(characters);
});
router.post("/deleteCharacter", async (req, res) => {
  const idCharacter = req.body.idCharacter
  let characters = await character_services.deleteCharacter(idCharacter);
  res.json(characters);
});
router.post("/updateCharacter", async (req, res) => {
  const idCharacter = req.body.idCharacter
  const data = req.body.data
  let characters = await character_services.updateCharacter(idCharacter,data);
  res.json(characters);
});

module.exports = router