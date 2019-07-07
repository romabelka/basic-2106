import { createSelector } from "reselect";
import { getAverageRate } from "../utils";

const restaurantsSelector = state => state.restaurants;
const filtersSelector = state => state.filters;

export const dishSelector = (state, { id }) => state.dishes[id];
export const restaurantSelector = (state, { id }) => state.restaurants[id];
export const reviewSelector = (state, { id }) => state.reviews[id];
export const userSelector = (state, { id }) => {
  const userId = state.reviews[id].userId;
  return state.users[userId];
};

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  Object.entries(state.order).reduce(
    (acc, [id, amount]) => acc + dishSelector(state, { id }).price * amount,
    0
  );

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  (restaurants, filters) => {
    console.log("---", "filtrating");
    return Object.entries(restaurants).reduce(
      (acc, [id, restaurant]) =>
        getAverageRate(restaurant) >= filters.minRating
          ? { ...acc, [id]: restaurant }
          : acc,
      {}
    );
  }
);
