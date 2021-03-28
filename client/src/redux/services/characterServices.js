import axios from "axios";
import {URL} from "../../helper/config"
const getCharacterService = () => {
  return axios.get(`${URL}/characters/getCharacter`);
};
const deleteCharacterService = (idCharacter) => {
  console.log('deleteCharacter: ', idCharacter)
  return axios.post(`${URL}/characters/deleteCharacter`, {
    idCharacter})
};
const updateCharacterService = (data) => {
  console.log('updateCharacter:',data )
  return axios.post(`${URL}/characters/updateCharacter`,{
    data, idCharacter:data.id
  })
}
const addCharacterService = (data) => {
  console.log('introCharacter: ', data);
  return axios.post(`${URL}/characters/addCharacter`,{
    data
  });
};

export{getCharacterService,addCharacterService,deleteCharacterService,updateCharacterService}