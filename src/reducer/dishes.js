import { normalizedDishes } from "../fixtures";
import { arrToMap } from "../utils";
import { Map } from "immutable";

const defaultDishes = new Map(arrToMap(normalizedDishes));

export default (dishes = defaultDishes, { type }) => {
  switch (type) {
    default:
      return dishes;
  }
};
