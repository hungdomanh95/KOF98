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
  SEVER_REQUEST_LOADING
} from "../action/actionType";
const isRenderAdFighter = false;
const isRenderFormAdmin = false;
const isRenderNoti = false ;
const isLoading = false;
const characterReducer = (state = { isRenderAdFighter, 
                                    isRenderFormAdmin,
                                    isRenderNoti,
                                    isLoading,
                                }, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        characterItems: action.data
      }
    case GET_DATA_LIST:
      // var  updatedState = [...action.listcharacter];
      return {
        ...state, // tạo state mới 
        listcharacter: action.data
      };
    case UPDATE_NEW_LIST:
      return {
        ...state,
        newListCharacter: action.data
      }
    case STATUS_ADMIN_FIGHTER:
      return {
        ...state, 
        isRenderAdFighter: !state.isRenderAdFighter
      }
    case GET_PARAM_NOTI:
      return{
        ...state,
        paramCharacter:action.data,
        isRenderNoti:action.data.isRenderNoti,
        isAddSuccess:false,
        isDeleteSuccess:false,
        isEditSuccess:false
      }
    case GET_PARAM_FORM:
      return{
        ...state,
        isRenderFormAdmin:action.data.isRenderForm,
        paramForm:action.data
    }
    case SEVER_REQUEST_LOADING:
      return{
        ...state,
        isRenderFormAdmin:false,
        isRenderNoti:false,
        isLoading:true,
      }
    case ADD_CHARACTER_SUCCESS:
      return{
        ...state,
        isAddSuccess:action.data.data.success,
        // characterItems: [...state.characterItems,...action.data.data.data],
        isRenderNoti:true,
        isLoading:false,
      }
    case DELETE_CHARACTER_SUCCESS:
      return{
        ...state,
        isDeleteSuccess:action.data.data.success,
        isRenderNoti:true,
        isLoading:false
      }
    case EDIT_CHARACTER_SUCCESS:
      return{
        ...state,
        isEditSuccess:action.data.data.success,
        isRenderNoti:true,
        isLoading:false,
      }
    default: 
      return state;
  }
};

export { characterReducer };
