export function getAverageRate(restaurant, reviews) {
  return restaurant.reviews
    .map(reviewId => reviews[reviewId].rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}
