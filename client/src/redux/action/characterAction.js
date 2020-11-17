import { GET_DATA } from "./actionType";
import {getCharacterService} from '../services/characterServices'
export const getCharacter =  () => {
    return  dispatch => {
        getCharacterService().then(result=>{
           return dispatch({
               type: GET_DATA,
               data:result.data
             })
       })

   }
};