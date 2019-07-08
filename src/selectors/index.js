import { createSelector } from "reselect";
import { getAverageValue } from "../utils";

export const restaurantsSelector = state => state.restaurants;

export const filtersSelector = state => state.filters;

export const dishSelector = (state, { id }) => state.dishes[id];

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  Object.entries(state.order).reduce(
    (acc, [id, amount]) => acc + dishSelector(state, { id }).price * amount,
    0
  );

export const reviewsSelector = state => state.reviews;
export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];

export const usersSelector = state => state.users;

export const reviewWithUserSelector = createSelector(
  usersSelector,
  (state, props) => reviewSelector(state, { id: props.review }),
  (users, review) => {
    const user = users[review.userId];

    return {
      ...review,
      userName: (user && user.name) || "Unknown"
    };
  }
);

export const makeReviewWithUserSelector = () => reviewWithUserSelector;

export const restaurantsAverageRatingSelector = createSelector(
  restaurantsSelector,
  reviewsSelector,
  (restaurants, reviews) =>
    Object.values(restaurants).reduce((acc, restaurant) => {
      if (!restaurant.reviews || restaurant.reviews.length === 0) {
        return acc;
      }

      const averageRating = getAverageValue(
        restaurant.reviews.map(reviewId => reviews[reviewId]),
        "rating"
      );

      return {
        ...acc,
        [restaurant.id]: Math.floor(averageRating)
      };
    }, {})
);

export const restaurantAverageRatingSelector = (state, id) => {
  const ratings = restaurantsAverageRatingSelector(state);

  return (ratings && ratings[id]) || 0;
};

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  restaurantsAverageRatingSelector,
  filtersSelector,
  (restaurants, ratings, filters) =>
    Object.values(restaurants).filter(
      restaurant => ratings[restaurant.id] >= filters.minRating
    )
);
