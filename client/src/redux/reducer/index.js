import { combineReducers } from "redux";
import characterReducer from "./characterReducer"
import userReducer from "./userReducer"
const rootReducer = combineReducers({
    characterReducer,userReducer
});

export default rootReducer;