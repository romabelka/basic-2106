import { CREATE_REVIEW } from "../constants";
import { normalizedReviews } from "../fixtures";
import { withKeyValue } from "../utils";

export default (
  reviews = withKeyValue(normalizedReviews),
  { type, payload }
) => {
  if (type === CREATE_REVIEW) {
    return {
      ...reviews,
      [payload.id]: payload
    };
  }

  return reviews;
};
