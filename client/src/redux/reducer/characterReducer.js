import { GET_DATA, GET_DATA_LIST,GET_ADD_CHARACTER,ADD_DATA, GET_ADD_DATA,CHANGE_STATE,ONOFF_MODAL,ONOFF_NOTIFICATION,ONOFF_MODAL_FORM,ONOFF_MODAL_ADD,ONOFF_REQUEST_MODAL,ONOFF_NOTI,GET_DEL_DATA,GET_UPDATE_DATA} from "../action/actionType";
const statusModal = false;
// const statusModalForm = false;
const statusModalAdd = false;
const statusRequest = false;
const statusNofitication = false;
  const characterReducer = (state = {statusModal,statusModalAdd,statusRequest,statusNofitication}, action) => {
    // console.log('action.type: ', action.type);
    switch (action.type) {
      case GET_DATA: 
      return {
        ...state,
        characterItems:action.data
      }
      case GET_DATA_LIST: 
      return {
        ...state, // tạo state mới 
        listcharacter: action.data
      };
      case GET_DEL_DATA:
        // console.log("action.data", action.data)
        return {
          ...state,
          sucessDelCharacter: action.data
        }
      case GET_ADD_DATA:
        // console.log('action.data: ', action.data);
        return {
          ...state,
          sucessAddCharacter: action.data
        };
        case GET_UPDATE_DATA:
          console.log("action.dataComponent",action.dataComponent)
          console.log("action.dataAPI", action.data)
          return {
            ...state,
            successUpDateCharacter: action.dataComponent,
            upDateCharacter: action.data,

          }
          // case tương ứng với Type ( check điều kiện)
        case ONOFF_MODAL:
        return{
          ...state,
          // thay đổi state để render lại  
          statusModal: !state.statusModal
        }
        case ONOFF_MODAL_ADD:
          return {
            ...state,
            statusModalAdd: !state.statusModalAdd,
            
          }
          case ONOFF_REQUEST_MODAL:
            return{
              ...state,
              statusRequest: !state.statusRequest,
             
            }
            case ONOFF_NOTI:
              // console.log("action.params",action)
              return {
                ...state,
                statusNofitication: !state.statusNofitication,
                statusModalAdd : false,
                // statusModal: false,
                paramsNoti:action.params,
                // paramsNoti:action
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
  