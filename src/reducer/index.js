import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import filter from "./filter";

export default combineReducers({
  count: counterReducer,
  order,
  filter: filter
});
