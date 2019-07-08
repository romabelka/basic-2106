export function getAverageRate( restaurant, inReviews ) {    

  return restaurant.reviews
    .map(item => inReviews[item].rating)
    .filter( rate => typeof rate !== 'undefined' )
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}