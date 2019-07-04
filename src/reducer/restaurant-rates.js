import { RESTAURANT_RATE_CHANGE } from "../constants";

export default (restaurantRates = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case RESTAURANT_RATE_CHANGE:
      return {
        ...restaurantRates,
        [payload.id]: payload.rate
      };
    default:
      return restaurantRates;
  }
};
