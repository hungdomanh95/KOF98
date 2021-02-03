import { GET_DATA, GET_DATA_LIST,GET_ADD_CHARACTER,ADD_DATA, GET_ADD_DATA,CHANGE_STATE,ONOFF_MODAL} from "../action/actionType";

  const characterReducer = (state = {}, action) => {
    // console.log('action.type: ', action.type);
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
      case GET_ADD_DATA:
        return {
          ...state,
          sucessAddCharacter: action.data.success
        }
          // case tương ứng với Type ( check điều kiện)
        case ONOFF_MODAL:
        return{
          ...state,
          // thay đổi state để render lại  
          statusModal: !state.statusModal
        }
  
      // case CHANGE_STATE:
      //   // if(state.sucessAddCharacter) delete state.sucessAddCharacter
      //   return {
      //     ...state,
      //     sucessAddCharacter: false
      //   }

      default:
        return state;
    }
  };
  
  export {characterReducer};
  