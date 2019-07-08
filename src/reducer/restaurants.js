import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }), 
  {}
 );

export default (state = defaultRestaurants, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_REVIEW:
      let newReviews = payload.restaurant.reviews.slice();
      newReviews.push(payload.reviewId);
      let newRestaurant = {
        ...payload.restaurant,
        reviews: newReviews
      };
      return {
        ...state,
        [payload.restaurant.id]: newRestaurant
      }
      
    default:
      return state;
  }
};
