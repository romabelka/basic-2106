import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";

export default combineReducers({
  count: counterReducer,
  order
});
