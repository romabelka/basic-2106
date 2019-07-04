import { combineReducers } from "redux";
import counterReducer from "./counter";
import ratingReducer from "./rating";
import order from "./order";

export default combineReducers({
  count: counterReducer,
  rating: ratingReducer,
  order
});
