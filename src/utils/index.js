export function getAverageRate(restaurant) {
  return restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}

export function getAverageValue(items, key) {
  return items
    .map(item => Math.max(item[key] || 0, 0))
    .reduce((acc, item, _, arr) => acc + item / arr.length, 0);
}

export function withKeyValue(array = []) {
  return array.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  );
}
