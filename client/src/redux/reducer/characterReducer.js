import {GET_DATA} from "../action/actionType";

  const characterReducer = (state = {  }, action) => {
    switch (action.type) {
        case GET_DATA:
            return{
                ...state,
                itemsCharacter: action.data
            }
      default:
        return state;
    }
  };
  
  export default characterReducer;
  