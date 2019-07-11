import { arrToMap } from "../utils";
import {
  ADD_REVIEW,
  LOAD_RESTAURANT_REVIEWS,
  START,
  ERROR,
  SUCCESS
} from "../constants";

const defaultReviews = arrToMap([]);

export default (
  reviews = defaultReviews,
  { type, payload, id, restId, response, error }
) => {
  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [id]: { ...payload.review, id } };

    case LOAD_RESTAURANT_REVIEWS + START:
      let newstate = { ...reviews, loading: true };

      return newstate;

    case LOAD_RESTAURANT_REVIEWS + ERROR:
      return reviews.setIn([restId, "error"], error);

    case LOAD_RESTAURANT_REVIEWS + SUCCESS:
      let objMap = arrToMap(response);
      return { ...objMap, loading: false };

    default:
      return reviews;
  }
};
