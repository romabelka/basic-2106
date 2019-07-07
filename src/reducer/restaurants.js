import { normalizedRestaurants } from "../fixtures";
import { withKeyValue } from "../utils";

export default (restaurants = withKeyValue(normalizedRestaurants)) => {
  return restaurants;
};
