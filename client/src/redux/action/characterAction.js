import {
  GET_DATA,
  GET_DATA_LIST,
  STATUS_ADMIN_FIGHTER,
  UPDATE_NEW_LIST,
  GET_PARAM_NOTI,
  GET_PARAM_FORM,
  ADD_CHARACTER_SUCCESS,
  DELETE_CHARACTER_SUCCESS,
  EDIT_CHARACTER_SUCCESS,
  SEVER_REQUEST_LOADING,
  HANDLE_INFOR_MODAL,
} from "./actionType";
import { getCharacterService, addCharacterService ,deleteCharacterService,editCharacterService} from "../services/characterServices";

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
export const updateInforCharacter = (data) => {
  return {
    type: UPDATE_NEW_LIST,
    data
  };
};
export const handleInforModal = (paramModal) => {
  return {
    type:HANDLE_INFOR_MODAL,
    data:paramModal
  }
}
export const renderAdminFighter = () => {
  return {
    type: STATUS_ADMIN_FIGHTER,
  };
};
export const handleParamNoti=(param)=>{
  return{
    type:GET_PARAM_NOTI,
    data:param
  }
}
export const handleParamForm=(param)=>{
  return{
    type:GET_PARAM_FORM,
    data:param
  }
}
export const addCharacter=(data)=>{
  return (dispatch) =>{
    dispatch({
      type:SEVER_REQUEST_LOADING
    })
    addCharacterService(data).then((result)=>{
       dispatch({
        type:ADD_CHARACTER_SUCCESS,
        data:result
      })
    }).catch((err)=>{})
  }
}
export const deleteCharacter=(id)=>{
  return (dispatch) =>{
      dispatch({
        type:SEVER_REQUEST_LOADING
      })
    deleteCharacterService(id).then((result)=>{
      dispatch({
        type:DELETE_CHARACTER_SUCCESS,
        data:result
      })
    }).catch((err)=>{})
  }
}
export const editCharacter=(id,data)=>{
  return (dispatch)=>{
    dispatch({
      type:SEVER_REQUEST_LOADING
    })
    editCharacterService(id,data).then((result)=>{
      dispatch({
        type:EDIT_CHARACTER_SUCCESS,
        data:result
      })
    }).catch((err)=>{})
  }
}
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
