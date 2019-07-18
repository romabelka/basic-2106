import { ADD_ITEM, REMOVE_ITEM } from "./constants";

export const addItem = (id, restaurantId) => ({
  type: ADD_ITEM,
  payload: { id, restaurantId }
});

export const removeItem = (id, restaurantId) => ({
  type: REMOVE_ITEM,
  payload: { id, restaurantId }
});
