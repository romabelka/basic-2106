import { ADD_REVIEW, LOAD_ALL_REVIEWS } from "./constants";
import { ERROR, START, SUCCESS } from "../restaurants/constants";

export const loadRestaurantReviews = restaurantId => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_REVIEWS + START });

    const rawResponse = await fetch(`/api/reviews?id=${restaurantId}`);
    const response = await rawResponse.json();

    dispatch({ type: LOAD_ALL_REVIEWS + SUCCESS, response, restaurantId });
  } catch (error) {
    dispatch({ type: LOAD_ALL_REVIEWS + ERROR, error });
  }
};

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});
