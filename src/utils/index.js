export function calculateAverageRestaurantRate(restaurant, reviews){
  return restaurant.reviews
        .map(id => reviews[id].rating)
        .filter(rate => typeof rate !== "undefined")
        .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}