import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities").toJS();
export const isLoadingRestaurants = state => state.restaurants.get("loading");
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;
//Selectors for dishes
export const menuForRestaurantWasLoaded = (state, restaurantId) =>
  !!state.dishes[restaurantId];
export const dishLoadingSelector = (state, { restaurantId }) =>
  state.dishes[restaurantId].loading;
export const dishSelector = (state, { restaurantId, id }) => {
  return dishLoadingSelector(state, { restaurantId, id })
    ? undefined
    : state.dishes[restaurantId].entities[id];
};

export const reviewSelector = (state, { id }) => state.reviews[id];
export const isReviewsLoading = state => state.reviews.loading;

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

export const avarageRateSelector = (state, { restaurant }) => {
  console.log("calculating average rate");
  return restaurant.reviews
    .map(id => reviewSelector(state, { id }).rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
};
