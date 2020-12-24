import { GET_DATA, GET_DATA_LIST} from "../action/actionType";

  const characterReducer = (state = {}, action) => {
    // console.log(action)
    switch (action.type) {
      case GET_DATA: 
      return {
        ...state,
        characterItems:action.data
      }
      case GET_DATA_LIST: 
      // var  updatedState = [...action.listcharacter];
  
      return {
        ...state, // tạo state mới 
        listcharacter: action.data
      };

      default:
        return state;
    }
  };
  
  export {characterReducer};
  