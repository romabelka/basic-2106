import { fromJS, Map } from "immutable";
import { arrToMap } from "../utils";
import {
  ADD_REVIEW,
  ERROR,
  LOAD_ALL_RESTAURANTS,
  START,
  SUCCESS
} from "../constants";

const defaultState = new Map({
  entities: fromJS(arrToMap([])),
  loading: false,
  error: null
});

export default (
  state = defaultState,
  { type, payload, id, response, error }
) => {
  switch (type) {
    case ADD_REVIEW:
      return state.updateIn(
        ["entities", payload.restaurantId, "reviews"],
        reviews => reviews.push(id)
      );

    case LOAD_ALL_RESTAURANTS + START:
      return state.set("loading", true);

    case LOAD_ALL_RESTAURANTS + ERROR:
      return state.set("loading", false).set("error", error);

    case LOAD_ALL_RESTAURANTS + SUCCESS:
      return state
        .set("loading", false)
        .set("entities", fromJS(arrToMap(response)));

    default:
      return state;
  }
};
