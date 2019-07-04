import { combineReducers } from "redux";
import count from "./counter";
import order from "./order";
import filterReview from './filterReview'

export default combineReducers({
  count,
  order,
  filterReview
});
