import { ADD_ITEM, REMOVE_ITEM } from "../constants";
import { Map } from "immutable";

let defaultOrder = new Map({});

export default (order = defaultOrder, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return order.setIn([payload.id], (order.get(payload.id) || 0) + 1);

    case REMOVE_ITEM:
      return order.setIn(
        [payload.id],
        Math.max((order.get(payload.id) || 0) - 1, 0)
      );

    default:
      return order;
  }
};
