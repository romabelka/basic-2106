import { LOAD_ALL_DISHES } from "./constants";
import { ERROR, START, SUCCESS } from "../restaurants/constants";

export const loadAllDishes = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_DISHES + START });

    const rawResponse = await fetch("/api/dishes?id=restaurantId");
    const response = await rawResponse.json();
    console.log(response);

    dispatch({ type: LOAD_ALL_DISHES + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_DISHES + ERROR, error });
  }
};
