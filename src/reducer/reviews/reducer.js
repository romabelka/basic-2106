import { normalizedReviews } from "../../fixtures";
import { ADD_REVIEW } from "./constants";
import { arrToMap } from "../../utils";

const defaultReviews = arrToMap(normalizedReviews);

export default (reviews = defaultReviews, { type, payload, id }) => {
  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [id]: { ...payload.review, id }
      };
    default:
      return reviews;
  }
};
