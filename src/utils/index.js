import * as PropTypes from "prop-types";

export const idPropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
]).isRequired;

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
