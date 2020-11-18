import { GET_DATA,ADD_DATA } from "./actionType";
import {getCharacterService,addCharacterService} from '../services/characterServices'

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
export const addCharacter =  (introCharacter) => {
    return dispatch => {
        addCharacterService(introCharacter).then(result=>{
           return dispatch({
               type: ADD_DATA,
               data:result.data
             })
       })

   }
};