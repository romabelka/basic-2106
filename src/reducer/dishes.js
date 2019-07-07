import { normalizedDishes } from "../fixtures";
import { withKeyValue } from "../utils";

export default (dishes = withKeyValue(normalizedDishes)) => {
  return dishes;
};
