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

export const getUuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
    // eslint-disable-next-line no-mixed-operators
    .replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
