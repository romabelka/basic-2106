import { ADD_ITEM, REMOVE_ITEM } from "../constants";

export default (order = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        ...order,
        [payload.id]: (order[payload.id] || 0) + 1
      };

    case REMOVE_ITEM:
      return {
        ...order,
        [payload.id]: Math.max((order[payload.id] || 0) - 1, 0)
      };

    default:
      return order;
  }
};
