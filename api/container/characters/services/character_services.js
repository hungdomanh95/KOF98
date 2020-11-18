var Character = require('../models/character')

async function getAll() {
  return await Character.find({}).sort({ id: 1 });
}
async function addCharacter(introCharacter) {
  // console.log('introCharacter: ', introCharacter);
  var data = {intro:introCharacter}
  return await Character.create(data);
  // return await Character.find({}).sort({ id: 1 });
}

module.exports = {
    getAll,addCharacter
  };