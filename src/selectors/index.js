import { createSelector } from "reselect";
import { getAverageRate } from "../utils";

const restaurantsSelector = state => state.restaurants;
const filtersSelector = state => state.filters;

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  (restaurants, filters) => {
    console.log("---", "filtrating");
    return restaurants.filter(
      restaurant => getAverageRate(restaurant) >= filters.minRating
    );
  }
);
