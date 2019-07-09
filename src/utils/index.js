export function getAverageRate(restaurant, reviews) {
  const restaurantreviews = restaurant.reviews.map(id => reviews[id]);

  return restaurantreviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}
