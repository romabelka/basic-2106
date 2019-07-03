import { combineReducers } from "redux";
import order from "./order";
import minRating from "./min-rating";

export default combineReducers({
  order,
  minRating
});
