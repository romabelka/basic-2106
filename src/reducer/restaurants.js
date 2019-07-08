import { normalizedRestaurants } from "../fixtures";

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (state = defaultRestaurants, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
