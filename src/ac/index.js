import {
  ADD_ITEM,
  ADD_REVIEW,
  ERROR,
  LOAD_ALL_RESTAURANTS,
  LOAD_ALL_REVIEWS,
  LOAD_MENU,
  REMOVE_ITEM,
  SET_MIN_RATING,
  START,
  SUCCESS
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

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});

export const loadAllRestaurants = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_RESTAURANTS + START });

    const rawRes = await fetch("/api/restaurants");
    const response = await rawRes.json();

    dispatch({ type: LOAD_ALL_RESTAURANTS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_RESTAURANTS + ERROR, error });
  }
};

export const loadAllReviews = () => ({
  type: LOAD_ALL_REVIEWS,
  callAPI: "/api/reviews"
});

export const loadMenu = restaurantId => ({
  type: LOAD_MENU,
  payload: { restaurantId },
  callAPI: `/api/dishes?id=${restaurantId}`
});
