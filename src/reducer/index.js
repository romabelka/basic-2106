import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import filters from "./filters";
import restaurants from "./restaurants";
import dishes from "./dishes";

export default combineReducers({
  count: counterReducer,
  order,
  filters,
  restaurants,
  dishes
});
