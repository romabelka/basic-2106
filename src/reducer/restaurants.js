import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW_TO_RESTAURANT } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (state = defaultRestaurants, { type, payload }) => {
  switch (type) {
    case ADD_REVIEW_TO_RESTAURANT:
      const restaurant = { ...state[payload.restaurantId] };
      restaurant.reviews.push(payload.reviewId);
      return { ...state, [payload.restaurantId]: restaurant };
    default:
      return state;
  }
};
