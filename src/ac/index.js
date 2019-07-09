import {
  ADD_ITEM,
  ADD_REVIEW,
  ADD_REVIEW_TO_RESTAURANT,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM,
  SET_MIN_RATING
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const addItem = id => ({
  type: ADD_ITEM,
  payload: { id }
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: { id }
});

export const setMinRating = minRating => ({
  type: SET_MIN_RATING,
  payload: { minRating }
});

export const addReview = (restaurantId, review) => ({
  type: ADD_REVIEW,
  payload: { restaurantId, review }
});

export const addReviewToRestaurant = (restaurantId, reviewId) => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  payload: { restaurantId, reviewId }
});
