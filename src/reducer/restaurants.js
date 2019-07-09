import { normalizedRestaurants } from "../fixtures";
import { ADD_RATING } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (state = defaultRestaurants, { type, payload }) => {
  switch (type) {
    case ADD_RATING:
      return {
        ...state,
        [payload.restaurantId]: {
          ...state[payload.restaurantId],
          reviews: [...state[payload.restaurantId].reviews, payload.review.id]
        }
      };
    default:
      return state;
  }
};
