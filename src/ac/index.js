import {
  ADD_ITEM,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM,
  SET_THRESHOLD
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

export const setThreshold = threshold => {
  return {
    type: SET_THRESHOLD,
    payload: { threshold }
  };
};
