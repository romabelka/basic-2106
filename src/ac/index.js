import {
  ADD_ITEM,
  ADD_REVIEW,
  DECREMENT,
  INCREMENT,
  LOAD_ALL_RESTAURANTS,
  LOAD_ALL_REVIEWS,
  REMOVE_ITEM,
  SET_MIN_RATING
} from "../constants";
import { eventToEndpoint } from "../utils";

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

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});

/*
export const loadAllRestaurants = () => ({
  type: LOAD_ALL_RESTAURANTS,
  callAPI: "/api/restaurants"
});
*/

export const loadAllRestaurants = eventToEndpoint(
  LOAD_ALL_RESTAURANTS,
  "/api/restaurants"
);

export const loadAllReviews = eventToEndpoint(LOAD_ALL_REVIEWS, "/api/reviews");
