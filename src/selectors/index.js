import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities").toJS();
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;
export const dishSelector = (state, { id }) => state.dishes[id];
export const reviewSelector = (state, { id }) => state.reviews[id];

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
  reviewsSelector,
  (restaurants, filters, reviews) =>
    Object.values(restaurants).filter(
      restaurant =>
        avarageRateSelector({ reviews }, { restaurant }) >= filters.minRating
    )
);

export const avarageRateSelector = (state, { restaurant }) =>
  restaurant.reviews
    .map(id => reviewSelector(state, { id }).rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
