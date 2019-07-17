import { matchPath } from "react-router-dom";
import { push } from "connected-react-router";
import { ERROR, LOAD_ALL_RESTAURANTS, START, SUCCESS } from "./constants";

export const loadAllRestaurants = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_ALL_RESTAURANTS + START });

    const rawRes = await fetch("/api/restaurants");
    const response = await rawRes.json();

    dispatch({ type: LOAD_ALL_RESTAURANTS + SUCCESS, response });

    const { router, restaurants } = getState();

    const { id } = matchPath(router.location.pathname, {
      path: "/restaurants/:id"
    }).params;

    if (!restaurants.entities.get(id)) {
      dispatch(push("/error"));
    }
  } catch (error) {
    dispatch({ type: LOAD_ALL_RESTAURANTS + ERROR, error });
  }
};
