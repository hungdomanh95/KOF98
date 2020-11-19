var Character = require('../models/character')

async function getAll() {
  return await Character.find({}).sort({ id: 1 });
}
async function addCharacter(data) {
  let newCharacter = await Character.insertMany(data);
  if(!newCharacter) {
    return {
      success: false,
      message: "Error Add Character",
      code: "errorAdd"
    };
  }else{
    return{
      success:true,
      data:newCharacter,
      message:"Add Character Success !!!",
      code:"success",
    }
  }
}
async function deleteCharacter(idCharacter) {
  let deleteCharacter =  await Character.deleteOne({id:idCharacter});
  if(!deleteCharacter) {
    return {
      success: false,
      message: "Error Delete Character",
      code: "errorDelete"
    };
  }else{
    return{
      success:true,
      data:deleteCharacter,
      message:"Add Delete Success !!!",
      code:"success",

    }
  }
}
async function updateCharacter(idCharacter,data) {
  let updateCharacter =  await Character.findOneAndUpdate({
    id:idCharacter
  },
  {
    $set: {
      intro:data.intro
    },
  });
  if(!updateCharacter) {
    return {
      success: false,
      message: "Error Update Character",
      code: "errorDelete"
    };
  }else{
    return{
      success:true,
      data:updateCharacter,
      message:"Add Delete Success !!!",
      code:"success",
    }
  }
}

module.exports = {
    getAll,addCharacter,deleteCharacter,updateCharacter
  };