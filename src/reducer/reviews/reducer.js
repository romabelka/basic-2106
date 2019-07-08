import { normalizedReviews } from "../../fixtures";

const defaultReviews = normalizedReviews.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (reviews = defaultReviews, { type }) => {
  switch (type) {
    default:
      return reviews;
  }
};
