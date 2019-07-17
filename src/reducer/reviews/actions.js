import { ADD_REVIEW, LOAD_ALL_REVIEWS } from "./constants";

export const loadAllReviews = () => ({
  type: LOAD_ALL_REVIEWS,
  callAPI: "/api/reviews"
});

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});
