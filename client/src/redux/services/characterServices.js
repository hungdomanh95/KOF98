import axios from "axios";
import {URL} from "../../helper/config"
const getCharacterService = () => {
  return axios.get(`${URL}/characters/getCharacter`);
};
const addCharacterService = (introCharacter) => {
  console.log('introCharacter: ', introCharacter);
  return axios.post(`${URL}/characters/addCharacter`,{introCharacter});
};

export{getCharacterService,addCharacterService}