import { createSelector } from "reselect";
import {calculateAverageRestaurantRate} from "../utils"

const restaurantsSelector = state => state.restaurants;
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;
export const restaurantSelector = (state, id) => restaurantsSelector(state)[id];
export const restaurantReviewsSelector = (state, id) => restaurantSelector(state, id).reviews;
export const restaurantReviewsRatingSelector = (state, {id}) => restaurantReviewsSelector(state, id).map(id => reviewSelector(state, id).rating);
export const dishSelector = (state, { id }) => state.dishes[id];
export const reviewSelector = (state, id) => state.reviews[id];
export const userSelector = (state, id) => state.users[id];

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  Object.entries(state.order).reduce(
    (acc, [id, amount]) => acc + dishSelector(state, { id }).price * amount,
    0
  );

/*function calculateAverageRestaurantRate(restaurant, reviews){
  return restaurant.reviews
        .map(id => reviews[id].rating)
        .filter(rate => typeof rate !== "undefined")
        .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}*/

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  reviewsSelector,
  (restaurants, filters, reviews) => {     
    return Object.values(restaurants)
      .map(restaurant => {
        // Добавляем к объекту ресторан значение среднего рейтинга, чтобы затем его спустить вниз по цепочке в пропсах 
        // От компонента RestaurantList к компоненту RestaurantRate и отобразить
        console.log('calculating average rate');
        let averageRate = calculateAverageRestaurantRate(restaurant, reviews);
        return {
          ...restaurant,
          rate: averageRate
        }
      })
      .filter(
      restaurant => restaurant.rate >= filters.minRating
    );
  }
);

