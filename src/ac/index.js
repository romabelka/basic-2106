import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_MIN_RATING,
  CREATE_NEW_USER_REVIEW,
  CREATE_REVIEW,
  CREATE_USER,
  ADD_REVIEW_TO_RESTAURANT
} from "../constants";

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

export const createNewUserReview = payload => ({
  type: CREATE_NEW_USER_REVIEW,
  payload
});

export const createUser = payload => ({
  type: CREATE_USER,
  payload
});

export const createReview = payload => ({
  type: CREATE_REVIEW,
  payload
});

export const addReviewToRestaurant = payload => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  payload
});
