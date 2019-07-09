export const getAverageRate = restaurant =>
  restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);

export const arrToMap = arr =>
  arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  );
