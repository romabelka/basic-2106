import { normalizedReviews } from "../fixtures";
import { arrToMap } from "../utils";
import { ADD_REVIEW } from "../constants";

const defaultReviews = arrToMap(normalizedReviews);

export default (reviews = defaultReviews, { type, payload, id }) => {
  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [id]: { ...payload.review, id } };

    default:
      return reviews;
  }
};
