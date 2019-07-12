import { createSelector } from "reselect";
import { fromJS, Map } from "immutable";

const restaurantsSelector = state => state.restaurants.get("entities").toJS();
export const isRestaurantsLoading = state => state.restaurants.get("loading");
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews.get("entities").toJS();
export const dishSelector = (state, { id }) => state.dishes[id];
export const reviewSelector = (state, { restaurantId }) =>
  state.reviews.get("entities").toJS()[restaurantId] || [];
export const menuSelector = (state, { restaurantId }) =>
  state.menus.get("entities").toJS()[restaurantId] || [];

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
  (restaurants, filters, reviews) => {
    const reviewsState = { reviews: new Map({ entities: fromJS(reviews) }) };

    return Object.values(restaurants).filter(
      restaurant =>
        averageRateSelector(reviewsState, { restaurantId: restaurant.id }) >=
        filters.minRating
    );
  }
);

export const averageRateSelector = (state, { restaurantId }) =>
  reviewSelector(state, { restaurantId })
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
