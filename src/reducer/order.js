import { ADD_ITEM, REMOVE_ITEM } from "../constants";
import { Map } from "immutable";

const order = new Map({
})

export default ( state = order, { type, payload }) => {

  switch (type) {
    case ADD_ITEM:
      return state.update(payload.id, 0, amount => amount + 1);

    case REMOVE_ITEM:
      return state.update(payload.id, 0, amount => Math.max(0, amount - 1));

    default:
      return state;
  }
};
