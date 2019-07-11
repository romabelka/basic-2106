import { ADD_REVIEW, LOAD_ALL_REVIEWS } from "./constants";
import { ERROR, START, SUCCESS } from "../restaurants/constants";

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});

export const loadAllReviews = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_REVIEWS + START });

    const rawResponse = await fetch("/api/reviews");
    const response = await rawResponse.json();

    dispatch({ type: LOAD_ALL_REVIEWS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_REVIEWS + ERROR, error });
  }
};
