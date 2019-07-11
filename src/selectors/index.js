import { createSelector } from "reselect";
import { ENTITIES, LOADING_STATE } from "../constants";

const restaurantsSelector = state => state.restaurants.get(ENTITIES).toJS();
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;
export const dishSelector = (state, { id }) => state.dishes.get(id);
export const reviewSelector = (state, { id }) =>
  state.reviews.get(ENTITIES).get(id);
export const restaurantLoadingSelector = state =>
  state.restaurants.get(LOADING_STATE);
export const reviewsLoadingSelector = state => state.reviews.get(LOADING_STATE);
export const userSelector = (state, { id }) =>
  state.users.get(ENTITIES).get(id);

export const totalAmountSelector = state =>
  state.order.reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  state.order.reduce(
    (acc, amount, id) => acc + dishSelector(state, { id }).price * amount,
    0
  );

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  reviewsSelector,
  restaurantLoadingSelector,
  reviewsLoadingSelector,
  (restaurants, filters, reviews, restaurantsLoading, reviewsLoading) => {
    const smthIsLoading = restaurantsLoading || reviewsLoading;
    return Object.values(restaurants).filter(
      restaurant =>
        !smthIsLoading &&
        avarageRateSelector({ reviews }, { restaurant }) >=
          filters.get("minRating")
    );
  }
);

export const avarageRateSelector = (state, { restaurant }) =>
  restaurant.reviews
    .map(id => reviewSelector(state, { id }).get("rating"))
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
