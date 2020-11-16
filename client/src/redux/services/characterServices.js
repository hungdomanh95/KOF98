import axios from "axios";
import {URL} from "../../helper/config"
const getCharacterService = () => {
  return axios.get(`${URL}/characters/getCharacter`);
};
export{getCharacterService}