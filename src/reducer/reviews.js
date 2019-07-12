import { fromJS, Map } from "immutable";
import {
  ADD_REVIEW,
  ERROR,
  LOAD_RESTAURANT_REVIEWS,
  START,
  SUCCESS
} from "../constants";

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

    case LOAD_RESTAURANT_REVIEWS + START:
      return reviews.set("loading", true);

    case LOAD_RESTAURANT_REVIEWS + ERROR:
      return reviews.set("loading", false).set("error", error);

    case LOAD_RESTAURANT_REVIEWS + SUCCESS:
      return reviews
        .set("loading", false)
        .setIn(["entities", restaurantId], response);

    default:
      return reviews;
  }
};
