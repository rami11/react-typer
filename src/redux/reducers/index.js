import { combineReducers } from "redux";
import authReducer from "./authReducer";
import typerReducer from "./typerReducer";

export default combineReducers({
  auth: authReducer,
  typer: typerReducer,
});
