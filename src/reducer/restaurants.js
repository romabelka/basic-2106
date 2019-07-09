import { normalizedRestaurants as defaultRestaurants } from "../fixtures";

export default (state = defaultRestaurants, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
