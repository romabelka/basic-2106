import { fromJS, Map } from "immutable";
import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities").toJS();
const filtersSelector = state => state.filters;

export const dishSelector = (state, { id }) => state.dishes[id];
export const menuDishesSelector = (state, { restaurantId }) =>
  state.dishes.get("entities").toJS()[restaurantId];

const reviewsSelector = state => state.reviews.get("entities").toJS();
export const reviewSelector = (state, { restaurantId }) =>
  state.reviews.get("entities").toJS()[restaurantId] || [];

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
