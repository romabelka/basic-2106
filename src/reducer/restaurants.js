import { normalizedRestaurants } from "../fixtures";
import { withKeyValue } from "../utils";
import { ADD_REVIEW_TO_RESTAURANT } from "../constants";

export default (
  restaurants = withKeyValue(normalizedRestaurants),
  { type, payload }
) => {
  if (type === ADD_REVIEW_TO_RESTAURANT) {
    const restaurant = restaurants[payload.restaurantId];

    if (!restaurant) {
      return restaurants;
    }

    return Object.assign({}, restaurants, {
      [restaurant.id]: Object.assign({}, restaurant, {
        reviews: [...restaurant.reviews, payload.reviewId]
      })
    });
  }

  return restaurants;
};
