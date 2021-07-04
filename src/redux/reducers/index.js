import { combineReducers } from "redux";
// import authReducer from "./authReducer";
import typerReducer from "./typerReducer";
import socketioReducer from "./socketioReducer";

export default combineReducers({
  // auth: authReducer,
  socketio: socketioReducer,
  typer: typerReducer,
});
