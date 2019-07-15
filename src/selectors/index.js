import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities");
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;
export const allDishesSelect = state => state.dishes;
export const dishSelector1 = (dishes, dishId) => dishes.getIn(["entities", dishId]);
export const dishSelector = (state, { dishId }) =>
  state.dishes.getIn(["entities", dishId]);
export const reviewSelector = (state, { id }) =>
  state.reviews.getIn(["entities", id]);

export const restaurantsLoading = state =>
  state.restaurants.loading || state.reviews.loading;

export const menuLoadingSelector = (state, { restaurant }) =>
  state.dishes.loading.get(restaurant.id);

export const menuLoadedSelector = (state, { restaurant }) =>
  state.dishes.loaded.get(restaurant.id);

export const amountOfDishInOrder = (state, restId, dishId) =>
  state.order.getIn([restId,dishId]);

export const totalAmountSelector = state =>{ 
  let arr = [];
  state.order.valueSeq().forEach(v=> (v.valueSeq().forEach(v1=>arr.push(v1))));
return arr.reduce((sum, amount)=>sum+amount,0);
}
export const totalPriceSelector = state => {
  let arr = []; 
  state.order.valueSeq().forEach(v=> (v.entrySeq().forEach(e=> {
    let price = dishSelector(state, {dishId: e[0]}).price;
    let amount = e[1];
    arr.push(price*amount);
  })));
   
  return arr.reduce((sum, amount)=>sum+amount,0);
}

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
          avarageRateSelector({ reviews }, { restaurant }) >= filters.minRating
      )
);

export const avarageRateSelector = (state, { restaurant }) =>
  restaurant.reviews
    .map(id => reviewSelector(state, { id }))
    .map(review => review && review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
