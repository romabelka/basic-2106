import { ADD_ITEM, REMOVE_ITEM, CHANGE_MIN_RATING } from "../constants";

export const addItem = id => ({
  type: ADD_ITEM,
  payload: { id }
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: { id }
});

export const changeMinRating = minRating => ({
  type: CHANGE_MIN_RATING,
  payload: { minRating }
});
