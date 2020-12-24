import { GET_DATA, ADD_DATA, GET_DATA_LIST } from "./actionType";
import { getCharacterService } from "../services/characterServices";

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
