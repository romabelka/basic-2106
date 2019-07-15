import { ADD_ITEM, REMOVE_ITEM } from "../constants";
import { Map, Record } from "immutable";
import {arrToMap} from "../utils"

export default (order = new Map({}), action) => {
  const { type, payload } = action;
  
  switch (type) {
    case ADD_ITEM:        
      return order.updateIn([payload.restId, payload.dishId],0, amount=> amount+1);

    case REMOVE_ITEM:
      return order.updateIn([payload.restId, payload.dishId], 0, amount => Math.max(0, amount - 1));

    default:
      return order;
  }
};