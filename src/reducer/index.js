import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import rating from "./rating";

export default combineReducers({
  count: counterReducer,
  order,
  rating
});
