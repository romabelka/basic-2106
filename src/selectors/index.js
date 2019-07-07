import { createSelector } from "reselect";
import { getAverageRate } from "../utils";

const restaurantsSelector = state => state.restaurants;
const filtersSelector = state => state.filters;

export const dishSelector = (state, { id }) => state.dishes[id];

export const reviewsListSelector = (state, { reviews }) =>
  reviews.reduce(function(acc, item) {
    const review = state.reviews[item];
    acc.push({
      id: review.id,
      user: state.users[review.userId].name,
      text: review.text,
      rating: review.rating
    });
    return acc;
  }, []);

export const restaurantById = (state, restaurant) => {
  const { id, name, image, location } = state.restaurants[restaurant.id];
  const menu = restaurant.menu.reduce(function(acc, current) {
    acc.push(state.dishes[current]);
    return acc;
  }, []);
  const reviews = restaurant.reviews.reduce(function(acc, current) {
    acc.push(state.reviews[current]);
    return acc;
  }, []);
  return {
    id: id,
    name: name,
    image: image,
    location: location,
    menu: menu,
    reviews: reviews
  };
};

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  Object.entries(state.order).reduce(
    (acc, [id, amount]) => acc + dishSelector(state, { id }).price * amount,
    0
  );

export const filtratedRestaurantsSelector = createSelector(
  state => state,
  restaurantsSelector,
  filtersSelector,
  (state, restaurants, filters) => {
    return Object.values(restaurants).filter(restaurant => {
      const restaurantWithReviews = {
        id: restaurant.id,
        name: restaurant.name,
        image: restaurant.image,
        location: restaurant.location,
        menu: restaurant.menu,
        reviews: reviewsListSelector(state, restaurant)
      };
      return getAverageRate(restaurantWithReviews) >= filters.minRating;
    });
  }
);
