import { GET_DATA } from "./actionType";
import {getCharacterService} from '../services/characterServices'
export const getCharacter =  () => {
    return  dispatch => {
        getCharacterService().then(result=>{
            console.log('result: ', result);
           return dispatch({
               type: GET_DATA,
             })
       })

   }
};