import { combineReducers } from "redux";
import order from "./order";
import filters from "./filters";
import restaurants from "./restaurants";
import dishes from "./dishes";

export default combineReducers({
  order,
  filters,
  restaurants,
  dishes
});
