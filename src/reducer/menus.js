import { fromJS, Map } from "immutable";
import { ERROR, LOAD_RESTAURANT_MENU, START, SUCCESS } from "../constants";

const defaultState = new Map({
  entities: fromJS({}),
  loading: false,
  error: null
});

export default (
  state = defaultState,
  { type, restaurantId, response, error }
) => {
  switch (type) {
    case LOAD_RESTAURANT_MENU + START:
      return state.set("loading", true);

    case LOAD_RESTAURANT_MENU + ERROR:
      return state.set("loading", false).set("error", error);

    case LOAD_RESTAURANT_MENU + SUCCESS:
      return state
        .set("loading", false)
        .setIn(["entities", restaurantId], response);

    default:
      return state;
  }
};
