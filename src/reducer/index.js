import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import filterRate from "./filter";
import rate from "./rate";

export default combineReducers({
  count: counterReducer,
  order,
  filterRate,
  rate
});
