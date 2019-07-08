import { createSelector } from "reselect";
import { getAverageRate } from "../utils";

const restaurantsSelector = state => state.restaurants;
const filtersSelector = state => state.filters;
const reviews = state => state.reviews;

export const dishSelector = ( state, {id} ) => state.dishes[id];
export const reviewSelector = ( state, {id} ) => state.reviews[id];

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
  reviews,
  ( restaurants, filters, reviews ) => {
    
    let upRestaurants = restaurants.map( obj => ({...obj, rate : getAverageRate(obj, reviews)}) );
    upRestaurants = upRestaurants.filter(obj => obj.rate>=filters.minRating);
    return upRestaurants;
  }  
);
