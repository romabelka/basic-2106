import { Record } from "immutable";
import { normalizedDishes } from "../fixtures";
import { arrToMap } from "../utils";

const DishRecord = Record({
  id: null,
  name: null,
  price: null,
  ingredients: []
});

const ReducerRecord = Record({
  entities: arrToMap(normalizedDishes, DishRecord)
});

export default (dishesState = new ReducerRecord(), { type }) => {
  switch (type) {
    default:
      return dishesState;
  }
};
