import {
  ADD_ITEM,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM,
  SELECT_CHANGE
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

export const selectChange = filterValue => ({
  type: SELECT_CHANGE,
  payload: filterValue
});
