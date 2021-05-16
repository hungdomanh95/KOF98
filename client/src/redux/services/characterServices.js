import axios from "axios";
import {URL} from "../../helper/config"
const getCharacterService = () => {
  return axios.get(`${URL}/characters/getCharacter`);
};
const addCharacterService = (data) => {
  console.log('data: ', data);
  return axios.post(`${URL}/characters/addCharacter`,{data});
};
const deleteCharacterService = (idCharacter) =>{
  console.log(idCharacter)
  return axios.post(`${URL}/characters/deleteCharacter`,{idCharacter})
}
const editCharacterService = (idCharacter,data) =>{
  console.log(idCharacter)
  console.log(data)
  return axios.post(`${URL}/characters/updateCharacter`,{idCharacter,data})
}
export{getCharacterService,addCharacterService,deleteCharacterService,editCharacterService}