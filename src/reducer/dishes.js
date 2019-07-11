import { arrToMap } from "../utils";

import { LOAD_RESTAURANT_MENU, START, ERROR, SUCCESS } from "../constants";

const defaultDishes = {};

export default (
  dishes = { defaultDishes },
  { type, restId, response, error }
) => {
  switch (type) {
    case LOAD_RESTAURANT_MENU + START:
      let newstate = {
        ...dishes,
        [restId]: {
          loading: true
        }
      };

      return newstate;

    case LOAD_RESTAURANT_MENU + ERROR:
      return dishes.setIn([restId, "error"], error);

    case LOAD_RESTAURANT_MENU + SUCCESS:
      return {
        ...dishes,
        [restId]: {
          loading: false,
          entities: arrToMap(response)
        }
      };

    default:
      return dishes;
  }
};
