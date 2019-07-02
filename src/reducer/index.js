import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import threshold from "./threshold";

export default combineReducers({
  count: counterReducer,
  order,
  threshold
});
