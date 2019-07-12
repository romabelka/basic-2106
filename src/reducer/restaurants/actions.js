import { ERROR, LOAD_ALL_RESTAURANTS, START, SUCCESS } from "./constants";

export const loadAllRestaurants = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_RESTAURANTS + START });

    const rawResponse = await fetch("/api/restaurants");
    const response = await rawResponse.json();

    dispatch({ type: LOAD_ALL_RESTAURANTS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_RESTAURANTS + ERROR, error });
  }
};

// async side-effect
