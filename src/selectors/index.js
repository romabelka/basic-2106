import { createSelector } from "reselect";
import { getAverageRate } from "../utils";

export const restaurantSelector = (state, { id }) => state.restaurants[id];
const restaurantsSelector = state => state.restaurants;
const filtersSelector = state => state.filters;
export const reviewsSelector = state => state.reviews;
export const reviewSelector = (state, { id }) => state.reviews[id];
export const dishSelector = (state, { id }) => state.dishes[id];

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
    console.log("---", "filtrating");
    return Object.values(restaurants).filter(restaurant => {
      const restaurantReviews = restaurant.reviews
        .filter(reviewId => reviews[reviewId])
        .map(reviewId => reviews[reviewId]);
      return getAverageRate(restaurantReviews) >= filters.minRating;
    });
  }
);

export const restaurantReviewsSelector = createSelector(
  restaurantSelector,
  reviewsSelector,
  (restaurant, reviews) => {
    return restaurant.reviews
      .filter(reviewId => reviews[reviewId])
      .map(reviewId => reviews[reviewId]);
  }
);
