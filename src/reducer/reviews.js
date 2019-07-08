import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from '../constants'

const defaultReviews = normalizedReviews.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default ( reviews = defaultReviews, { type, payload }) => {

  switch (type) {
    case ADD_REVIEW:
      let newData = {payload};
      console.log(newData, newData);
      return reviews;
    default:
      return reviews;
  }
};
