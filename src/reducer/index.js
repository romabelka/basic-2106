import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import order from "./order/reducer";
import filters from "./filters/reducer";
import restaurants from "./restaurants/reducer";
import dishes from "./dishes/reducer";
import reviews from "./reviews/reducer";
import users from "./users/reducer";

export default combineReducers({
  count: counterReducer,
  order,
  filters,
  restaurants,
  dishes,
  reviews,
  users
});
