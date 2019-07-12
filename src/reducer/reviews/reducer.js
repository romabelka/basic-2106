import { fromJS, Map } from "immutable";
import { ADD_REVIEW, LOAD_ALL_REVIEWS } from "./constants";
import { ERROR, START, SUCCESS } from "../restaurants/constants";

const defaultReviews = new Map({
  entities: fromJS({}),
  loading: false,
  error: null
});

export default (
  reviews = defaultReviews,
  { type, payload, id, restaurantId, response, error }
) => {
  switch (type) {
    case ADD_REVIEW:
      return reviews.updateIn(["entities", payload.restaurantId], reviews =>
        reviews.concat({ ...payload.review, id })
      );

    case LOAD_ALL_REVIEWS + START:
      return reviews.set("loading", true);

    case LOAD_ALL_REVIEWS + ERROR:
      return reviews.set("loading", false).set("error", error);

    case LOAD_ALL_REVIEWS + SUCCESS:
      return reviews
        .set("loading", false)
        .setIn(["entities", restaurantId], response);

    default:
      return reviews;
  }
};
