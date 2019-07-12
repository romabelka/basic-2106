import { LOAD_ALL_DISHES } from "./constants";
import { ERROR, START, SUCCESS } from "../restaurants/constants";

export const loadAllDishes = restaurantId => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_DISHES + START });

    const rawResponse = await fetch(`/api/dishes?id=${restaurantId}`);
    const response = await rawResponse.json();

    dispatch({ type: LOAD_ALL_DISHES + SUCCESS, response, restaurantId });
  } catch (error) {
    dispatch({ type: LOAD_ALL_DISHES + ERROR, error });
  }
};
