import { fromJS, Map } from "immutable";
import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities").toJS();
const restaurantByIDsSelector = (state, { id }) =>
  state.restaurants.getIn(["entities", id]);
const filtersSelector = state => state.filters;

export const dishesSelector = state => {
  return state.dishes.get("entities");
};

export const dishByIdSelector = (state, { id }) => {
  return state.dishes.getIn(["entities", id]);
};

export const menuDishesSelector = (state, { restaurantId }) => {
  const restaurant = restaurantByIDsSelector(state, { id: restaurantId });
  const menuDishes = restaurant.get("menu");
  const dishesList = dishesSelector(state);
  if (dishesList.isEmpty()) {
    return [];
  }
  return menuDishes.map(dishId => dishesList.get(dishId)).toJS();
};

const reviewsSelector = state => state.reviews.get("entities").toJS();
export const reviewSelector = (state, { restaurantId }) =>
  state.reviews.get("entities").toJS()[restaurantId] || [];

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state => {
  return Object.entries(state.order).reduce((acc, [id, amount]) => {
    return acc + dishByIdSelector(state, { id }).get("price") * amount;
  }, 0);
};

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
