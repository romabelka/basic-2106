import { Record, Set } from "immutable";
import { normalizedDishes } from "../fixtures";
import { arrToMap } from "../utils";
import { LOAD_MENU, START, SUCCESS } from "../constants";

const DishRecord = Record({
  id: null,
  name: null,
  price: null,
  ingredients: []
});

const ReducerRecord = Record({
  entities: arrToMap(normalizedDishes, DishRecord),
  loading: new Set(),
  loaded: new Set()
});

export default (dishesState = new ReducerRecord(), { type, payload }) => {
  switch (type) {
    case LOAD_MENU + START:
      return dishesState.updateIn(["loading"], loading =>
        loading.add(payload.restaurantId)
      );

    case LOAD_MENU + SUCCESS:
      return dishesState
        .updateIn(["loading"], loading => loading.remove(payload.restaurantId))
        .updateIn(["loaded"], loading => loading.add(payload.restaurantId));

    default:
      return dishesState;
  }
};
