import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from "../constants";

const reviews = normalizedReviews.reduce(function(acc, current) {
  return { ...acc, [current.id]: current };
}, {});

export default (state = reviews, { type, payload }) => {
  switch (type) {
    case ADD_REVIEW:
      return {
        ...state,
        [payload.reviewId]: {
          id: payload.reviewId,
          rating: payload.rating,
          text: payload.reviewText,
          userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a"
        }
      };
    default:
      return state;
  }
};
