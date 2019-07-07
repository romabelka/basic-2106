import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(function(acc, current) {
  return { ...acc, [current.id]: current };
}, {});

export default (state = defaultRestaurants, { type, payload }) => {
  switch (type) {
    case ADD_REVIEW:
      state[payload.restaurantId].reviews.push(payload.reviewId);
      return state;
    default:
      return state;
  }
};
