import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import filter from "./selector";

export default combineReducers({
  count: counterReducer,
  filter,
  order
});
