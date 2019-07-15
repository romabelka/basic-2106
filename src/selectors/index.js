import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities");
const filtersSelector = state => state.filters;
const reviewsSelector = state => state.reviews;
export const dishSelector = (state, { id }) =>
  state.dishes.getIn(["entities", id]);
export const reviewSelector = (state, { id }) =>
  state.reviews.getIn(["entities", id]);

export const restaurantsLoading = state =>
  state.restaurants.loading || state.reviews.loading;

export const menuLoadingSelector = (state, { restaurant }) =>
  state.dishes.loading.get(restaurant.id);

export const menuLoadedSelector = (state, { restaurant }) =>
  state.dishes.loaded.get(restaurant.id);

export const restaurantSelector = (state, { id }) =>
  state.restaurants.getIn(["entities", id]);

export const dishPriceList = state => {

  const dishCntArr = state.order.valueSeq().toArray();
  const dishIdArr = state.order.keySeq().toArray();
  
  return dishIdArr.map( (i,index)=> {

    let dishId = dishIdArr[index];
    return {
      id : getRestaurantIdByDishId(state, dishId ),
      name : dishSelector(state, { id : dishId }).name,
      cnt  : dishCntArr[index]
    }
  });
}

export const getRestaurantIdByDishId = (state, dishId) =>{

  let restElem = null;
  let restIndex = -1;

  restaurantsSelector(state).forEach( (item, index)  => {
    if( restIndex === -1 ) {
      restElem = ( item.menu.indexOf(dishId) !== -1 ) ? item : null;
      if( restElem )
        restIndex = restElem.id
    }
  })

  return restIndex;
}

export const totalAmountSelector = state => 
  state.order.reduce((acc, amount) => acc + amount, 0);
 
export const totalPriceSelector = state =>
  state.order.reduce(
    (acc, amount, id) => acc + dishSelector(state, { id }).price * amount,
    0
  );

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
