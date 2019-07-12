import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import filters from "./filters";
import restaurants from "./restaurants";
import dishes from "./dishes";
import reviews from "./reviews";
import users from "./users";
import menus from "./menus";

export default combineReducers({
  count: counterReducer,
  order,
  filters,
  restaurants,
  dishes,
  users,
  reviews,
  menus
});
