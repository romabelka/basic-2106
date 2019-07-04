import {
  ADD_ITEM,
  REMOVE_ITEM,
  SELECT_CHANGE,
  RESTAURANT_RATE_CHANGE
} from "../constants";

export const addItem = id => ({
  type: ADD_ITEM,
  payload: { id }
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: { id }
});

export const selectChange = filterValue => ({
  type: SELECT_CHANGE,
  payload: filterValue
});

export const restaurantRateChange = (id, rate) => ({
  type: RESTAURANT_RATE_CHANGE,
  payload: { id, rate }
});
