import { getAverageRating } from "../helpers";
import { CHANGE_MIN_RATING } from "../constants";
import { restaurants } from "../fixtures";

const initialState = {
  restaurants,
  minRating: 0
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === CHANGE_MIN_RATING) {
    const filteredRestaurants = restaurants.filter(
      restaurant => getAverageRating(restaurant) >= payload.minRating
    );

    return {
      restaurants: filteredRestaurants,
      minRating: payload.minRating
    };
  }

  return state;
};
