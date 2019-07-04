import {
  ADD_ITEM,
  DECREMENT,
  FILTER_RATE,
  INCREMENT,
  REMOVE_ITEM,
  SET_RATE
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

export const filterRate = rate => ({
  type: FILTER_RATE,
  payload: rate
});

export const setRate = (id, rate) => ({
  type: SET_RATE,
  payload: { id, rate }
});
