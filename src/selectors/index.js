import { createSelector } from "reselect";
import { getAverageRate } from "../utils";

export const restaurantsSelector = state => state.restaurants;

export const filtersSelector = state => state.filters;

export const dishSelector = (state, { id }) => state.dishes[id];

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  Object.entries(state.order).reduce(
    (acc, [id, amount]) => acc + dishSelector(state, { id }).price * amount,
    0
  );

export const userSelector = (state, id) => state.users[id];
export const reviewSelector = (state, { review }) => {
  const reviewItem = state.reviews[review];
  const user = userSelector(state, (reviewItem && reviewItem.userId) || 0);

  return {
    ...reviewItem,
    userName: user.name || ""
  };
};

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  (restaurants, filters) => {
    return restaurants.filter(
      restaurant => getAverageRate(restaurant) >= filters.minRating
    );
  }
);
