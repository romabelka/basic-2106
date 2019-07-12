import { fromJS, Map } from "immutable";
import { arrToMap } from "../../utils";
import { LOAD_ALL_DISHES } from "./constants";
import { SUCCESS, START, ERROR } from "../restaurants/constants";

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
    case LOAD_ALL_DISHES + START:
      return state.set("loading", true);

    case LOAD_ALL_DISHES + ERROR:
      return state.set("loading", false).set("error", error);

    case LOAD_ALL_DISHES + SUCCESS:
      return state
        .set("loading", false)
        .setIn(["entities", restaurantId], response);

    default:
      return state;
  }
};
