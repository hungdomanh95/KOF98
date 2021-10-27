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
} from "../action/actionType";
const initState = {
   isRenderModal : false,
   isRenderAdFighter : false,
   isRenderFormAdmin : false,
   isRenderNoti : false ,
   isLoading : false
} 

const characterReducer = (state = initState, action) => {
  const searchIndex = (listSearch,id) => {
    let indexSearch = -1;
    listSearch.find((item,index)=>{
      if(item.id===id) indexSearch = index
    })
    return indexSearch
  }
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
    case HANDLE_INFOR_MODAL:
      return {
        ...state,
        isRenderModal:action.data.isRenderModal,
        paramModal:action.data.data
      }
    case STATUS_ADMIN_FIGHTER:
      return {
        ...state, 
        isRenderAdFighter: !state.isRenderAdFighter
      }
    case GET_PARAM_NOTI:
      return{
        ...state,
        paramNoti:action.data,
        isRenderNoti:action.data.isRenderNoti,
        isAddSuccess:action.data.isAddSuccess,
        isDeleteSuccess:action.data.isDeleteSuccess,
        isEditSuccess:action.data.isEditSuccess,
        isLoading:action.data.isRenderLoading,
      }
    case GET_PARAM_FORM:
      return{
        ...state,
        isRenderFormAdmin:action.data.isRenderForm,
        paramForm:action.data.data,
    }
    // case SEVER_REQUEST_LOADING:
    //   return{
    //     ...state,
    //     isRenderFormAdmin:false,
    //     isRenderNoti:false,
    //     isLoading:true,
    //   }
    case ADD_CHARACTER_SUCCESS:
      return{
        ...state,
        isAddSuccess:action.data.data.success,
        characterItems: [...state.characterItems,...action.data.data.data],
        // isRenderNoti:true,
        // isLoading:false,
      }
    case DELETE_CHARACTER_SUCCESS:
      let indexDelete = searchIndex(state.characterItems,action.data.data.data.id)
      state.characterItems.splice(indexDelete,1)
      return{
        ...state,
        isDeleteSuccess:action.data.data.success,
        characterItems:[...state.characterItems]
        
        // isRenderNoti:true,
        // isLoading:false
      }
    case EDIT_CHARACTER_SUCCESS:
      let indexEdit = searchIndex(state.characterItems,action.data.data.data.id)
      state.characterItems.splice(indexEdit,1,action.data.data.data)
      return{
        ...state,
        isEditSuccess:action.data.data.success,
        characterItems:[...state.characterItems]
        // isRenderNoti:true,
        // isLoading:false,
      }
      default: 
      return state;
  }
};

export { characterReducer };
