import axios from "axios";
import {URL} from "../../helper/config"
const registerService = (userName,password) => {
  return axios.post(`${URL}/users/register`,{userName,password});
};
const loginService = (userName,password) => {
  return axios.post(`${URL}/users/login`,{userName,password});
};


export{registerService,loginService}