import { combineReducers } from "redux";
import order from "./order";
import filters from "./filters";
import restaurants from "./restaurants";
import dishes from "./dishes";
import reviews from "./reviews"
import users from "./user"

export default combineReducers({
  order,
  filters,
  restaurants,
  dishes,
  reviews,
  users
});
