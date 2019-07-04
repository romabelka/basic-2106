import { combineReducers } from "redux";
import order from "./order";
import filterValue from "./selector";
import restaurantRates from "./restaurant-rates";

export default combineReducers({
  filterValue,
  order,
  restaurantRates
});
