import { normalizedReviews } from "../fixtures";

const defaultReviews = normalizedReviews.reduce(
  (accumulate, review) => ({
    ...accumulate,
    [review.id]: review
  }),
  {}
);

export default (state = defaultReviews, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
