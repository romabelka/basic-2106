import { ADD_ITEM, REMOVE_ITEM } from "../constants";
import { Map } from "immutable";

export default (order = new Map({}), action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return order.update(payload.id, 0, amount => amount + 1);

    case REMOVE_ITEM:
      return order.update(payload.id, 0, amount => Math.max(0, amount - 1));

    default:
      return order;
  }
};
