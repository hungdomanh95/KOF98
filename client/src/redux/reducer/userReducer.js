import {REGISTER, LOGIN, STATUS_REGISTER, STATUS_LOGIN, DELETE} from "../action/actionType";
const statusRegister = false;
const statusLogin = true;
const userReducer = (state = { statusRegister, statusLogin }, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        notiRegister: action.data,
      };

    case LOGIN:
      return {
        ...state,
        notiLogin: action.data,
        user:action.data.user
      };
    case STATUS_REGISTER:
      return {
        ...state,
        statusRegister: true,
        statusLogin: false,
      };
    case STATUS_LOGIN:
      return {
        ...state,
        statusLogin: true,
        statusRegister: false,
      };
    case DELETE:
      if (state.notiLogin) delete state.notiLogin;
      if (state.notiRegister) delete state.notiRegister;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
