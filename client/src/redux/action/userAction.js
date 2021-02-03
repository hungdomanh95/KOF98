import { REGISTER, LOGIN,STATUS_REGISTER,STATUS_LOGIN,DELETE,ONOFF_MODAL } from "./actionType";
import { registerService, loginService } from "../services/userServices";

export const register = (userName, password) => {
  return (dispatch) => {
    registerService(userName, password).then((result) => {
      console.log("result: ", result);
      return dispatch({
        type: REGISTER,
        data: result.data,
      });
    });
  };
};
export const login = (userName, password) => {
  return (dispatch) => {
    loginService(userName, password).then((result) => {
      return dispatch({
        type: LOGIN,
        data: result.data,
      });
    });
  };
};

export const screensRegister = () => {
  return{
    type: STATUS_REGISTER,
  };
};
export const screensLogin = () => {
  return{
    type: STATUS_LOGIN,
  };
};
export const deleteSuccess = () => {
  return{
    type: DELETE,
  };
};
// export hàm và import vào action -> trả về 1 cái type -> export const bên actionType 
export const onOffModal = () => {
  return{
    type: ONOFF_MODAL
  }
}
