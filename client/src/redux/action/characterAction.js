import { GET_DATA, GET_ADD_DATA, GET_DATA_LIST,GET_DEL_DATA,CHANGE_STATE,ONOFF_MODAL } from "./actionType";
import { getCharacterService,addCharacterService,deleteCharacterService } from "../services/characterServices";

export const getCharacter = () => {
  return (dispatch) => {
    // GỌI API
    getCharacterService().then((result) => {
      return dispatch({
        type: GET_DATA,
        data: result.data,
      });
    });
  };
};
export const GetListCharacter = (listcharacter) => {
  return (dispatch) => {
    // GỌI API
    getCharacterService().then((result) => {
      return dispatch({
        type: GET_DATA_LIST,
        data: result.data,
      });
    });
  };
};
export const getAddCharacter =  (data) => {
  // console.log('data: ', data);
  return (dispatch) => {
    // GỌI API 
    addCharacterService(data).then((result) => {
      return dispatch({
        type: GET_ADD_DATA,
        data: result.data,
      });
    });
  }
}
export const delChacracter = (data) => {
  return (dispatch) => {
    deleteCharacterService(data).then((result) => {
      return dispatch({
        type:GET_DEL_DATA,
        data: result.data,
      });
    });
  }
}
// export hàm và import vào action -> trả về 1 cái type -> export const bên actionType 
export const onOffModal = () => {
  return{
    type: ONOFF_MODAL
  }
}
export const onChangeState = () => {
      return {
        type:CHANGE_STATE,
      }
      
}
