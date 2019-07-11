import {
  ADD_ITEM,
  ADD_REVIEW,
  DECREMENT,
  ERROR,
  INCREMENT,
  LOAD_ALL_RESTAURANTS,
  REMOVE_ITEM,
  SET_MIN_RATING,
  START,
  SUCCESS,
  LOAD_RESTAURANT_MENU,
  LOAD_RESTAURANT_REVIEWS
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
export const loadRestaurantMenu = (restId) => async dispatch => {
  try {
    dispatch({ type: LOAD_RESTAURANT_MENU + START, restId });

    const rawRes = await fetch("/api/dishes?id=" + restId);
    const response = await rawRes.json();

    dispatch({ type: LOAD_RESTAURANT_MENU + SUCCESS, response, restId });
    //console.log(response);
  } catch (error) {
    dispatch({ type: LOAD_RESTAURANT_MENU + ERROR, error });
  }
};

export const loadRestaurantReviews = (restId) => async dispatch => {
  try {
    dispatch({ type: LOAD_RESTAURANT_REVIEWS + START, restId });

    const rawRes = await fetch("/api/reviews?id=" + restId);
    const response = await rawRes.json();

    dispatch({ type: LOAD_RESTAURANT_REVIEWS + SUCCESS, response, restId });
    //console.log(response);
  } catch (error) {
    dispatch({ type: LOAD_RESTAURANT_REVIEWS + ERROR, error });
  }
};
