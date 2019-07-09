import {
  ADD_ITEM,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM,
  SET_MIN_RATING,
  ADD_REVIEW
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

export const addReview = (rating, username, reviewtext, restaurant) => ({
  type: ADD_REVIEW,
  payload: { rating, username, reviewtext, restaurant }
});