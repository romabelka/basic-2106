import { normalizedRestaurants } from "../fixtures";

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (restaurants = defaultRestaurants, { type }) => {
  switch (type) {
    default:
      return restaurants;
  }
};
