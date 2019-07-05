import { normalizedDishes as defaultDishes } from "../fixtures";

export default (dishes = defaultDishes, { type }) => {
  switch (type) {
    default:
      return dishes;
  }
};
