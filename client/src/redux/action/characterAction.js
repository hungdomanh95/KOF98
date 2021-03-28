import { GET_DATA, GET_ADD_DATA, GET_DATA_LIST,GET_DEL_DATA,CHANGE_STATE,ONOFF_MODAL,ONOFF_MODAL_ADD,ONOFF_REQUEST_MODAL,ONOFF_NOTI,GET_UPDATE_DATA } from "./actionType";
import { getCharacterService,addCharacterService,deleteCharacterService,updateCharacterService } from "../services/characterServices";

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
export const getDeleteCharacter = (data) => {
  // console.log("data", data)
  return (dispatch) => {
    deleteCharacterService(data).then((result) => {
      return dispatch({
        type:GET_DEL_DATA,
        data: result.data
      });
    });
  }
}

export const getUpdateCharacter = (data) => {
  console.log("result",data)
 return (dispatch) => {
   updateCharacterService(data).then((result) => {
     console.log("result",result)
     return dispatch({
      type:GET_UPDATE_DATA,
      dataComponent: data,
      // Data của API 
      data: result.data
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
export const onOffRequest = () => {
  return {
    type: ONOFF_MODAL_ADD
  }
}
export const onOffModalAdd = () => {
  return {
    type: ONOFF_MODAL_ADD
  }
}
export const onOffNoti = (params) => {
  // console.log('params: ', params);
  // console.log("paramsDelelete",paramsDelelete)
  return {
    type: ONOFF_NOTI,
    params: params,
    // paramsDelelete: paramsDelelete
  }
}
export const onChangeState = () => {
      return {
        type:CHANGE_STATE,
      }
      
}

