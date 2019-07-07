import { normalizedReviews } from "../fixtures";
import { withKeyValue } from "../utils";

export default (reviews = withKeyValue(normalizedReviews)) => {
  return reviews;
};
