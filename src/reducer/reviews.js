import { normalizedReviews } from "../fixtures";
import { ADD_RATING } from "../constants";

const defaultReviews = normalizedReviews.reduce(
  (accumulate, review) => ({
    ...accumulate,
    [review.id]: review
  }),
  {}
);

export default (state = defaultReviews, { type, payload }) => {
  switch (type) {
    case ADD_RATING:
      return {
        ...state,
        [payload.review.id]: {
          ...payload.review
        }
      };
    default:
      return state;
  }
};
