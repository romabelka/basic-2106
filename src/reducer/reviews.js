import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultReviews = normalizedReviews.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (state = defaultReviews, { type, payload }) => {
  switch (type) {
    case ADD_REVIEW:
      return { ...state, [payload.review.id]: payload.review };

    default:
      return state;
  }
};
