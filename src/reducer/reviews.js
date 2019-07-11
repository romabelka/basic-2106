import { arrToMap } from "../utils";
import {
  ADD_REVIEW,
  ENTITIES,
  ERROR,
  ERROR_STATE,
  LOAD_ALL_REVIEWS,
  LOADING_STATE,
  START,
  SUCCESS
} from "../constants";
import { fromJS, Map } from "immutable";

const defaultReviews = new Map({
  loading: false,
  error: null,
  entities: new Map({})
});

export default (
  reviews = defaultReviews,
  { type, payload, id, response, error }
) => {
  switch (type) {
    case LOAD_ALL_REVIEWS + START:
      return reviews.set(LOADING_STATE, true).set(ERROR_STATE, null);

    case LOAD_ALL_REVIEWS + ERROR:
      return reviews.set(LOADING_STATE, false).set(ERROR_STATE, error);

    case LOAD_ALL_REVIEWS + SUCCESS:
      return reviews
        .set(ENTITIES, fromJS(arrToMap(response)))
        .set(LOADING_STATE, false)
        .set(ERROR_STATE, null);

    case ADD_REVIEW:
      return reviews.setIn([ENTITIES, id], fromJS(payload.review));

    default:
      return reviews;
  }
};
