import { normalizedDishes } from "../fixtures";
import { arrToMap } from "../utils";

const defaultDishes = arrToMap(normalizedDishes);

export default (dishes = defaultDishes, { type }) => {
  switch (type) {
    default:
      return dishes;
  }
};
