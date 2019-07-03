import { combineReducers } from "redux";
import order from "./order";
import filter from "./filter";

export default combineReducers({
  order,
  filter
});
