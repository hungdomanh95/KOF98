var Character = require('../models/character')

async function getAll() {
  return await Character.find({}).sort({ id: 1 });
}

module.exports = {
    getAll
  };