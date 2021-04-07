import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import userReducer from "./userReducer";
import activeReducer from "./activeReducer";

export default combineReducers({
  basketState: basketReducer,
  user: userReducer,
  active: activeReducer,
});
