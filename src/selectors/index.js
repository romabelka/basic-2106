import { createSelector } from "reselect";

export const restaurantsSelector = state => state.restaurants.get("entities");

const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;

export const reviewSelector = (state, { id }) =>
  state.reviews.getIn(["entities", id]);

export const restaurantsLoading = state =>
  state.restaurants.loading || state.reviews.loading;

export const dishesSelector = state => state.dishes.get("entities");

export const dishSelector = (state, { id }) => dishesSelector(state).get(id);

export const menuLoadingSelector = (state, { restaurant }) =>
  state.dishes.loading.get(restaurant.id);

export const menuLoadedSelector = (state, { restaurant }) =>
  state.dishes.loaded.get(restaurant.id);

export const orderSelector = state => state.order;

export const cartItemsIdsSelector = createSelector(
  orderSelector,
  order => order.reduce((acc, _, id) => [...acc, id], [])
);

export const cartItemAmountSelector = (state, { id }) =>
  orderSelector(state).get(id);

export const totalAmountSelector = createSelector(
  orderSelector,
  order => order.valueSeq().reduce((acc, amount) => acc + amount, 0)
);

export const cartItemSelector = (state, { id }) => {
  const restaurant = restaurantsSelector(state).find(restaurant =>
    restaurant.get("menu").find(dishId => dishId === id)
  );

  const dish = dishSelector(state, { id });

  return {
    amount: orderSelector(state).get(id),
    name: dish && dish.get("name"),
    price: dish && dish.get("price"),
    restaurantId: restaurant && restaurant.get("id")
  };
};

export const totalPriceSelector = createSelector(
  orderSelector,
  dishesSelector,
  (order, dishes) =>
    order.reduce((acc, amount, id) => acc + dishes.get(id).price * amount, 0)
);

export const restaurantSelector = (state, { id }) =>
  state.restaurants.getIn(["entities", id]);

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  reviewsSelector,
  (restaurants, filters, reviews) =>
    restaurants
      .valueSeq()
      .toArray()
      .filter(
        restaurant =>
          averageRateSelector({ reviews }, { restaurant }) >= filters.minRating
      )
);

export const averageRateSelector = (state, { restaurant }) =>
  restaurant.reviews
    .map(id => reviewSelector(state, { id }))
    .map(review => review && review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
