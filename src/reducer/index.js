import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import order from "./order/reducer";
import rating from "./restaurants/reducer";

export default combineReducers({
  count: counterReducer,
  order,
  rating
});
