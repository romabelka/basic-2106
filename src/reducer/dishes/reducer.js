import { arrToMap } from "../../utils";
import { LOAD_ALL_DISHES } from "./constants";
import { SUCCESS } from "../restaurants/constants";

const defaultDishes = {};

export default (dishes = defaultDishes, { type, response }) => {
  switch (type) {
    case LOAD_ALL_DISHES + SUCCESS:
      return arrToMap(response);

    default:
      return dishes;
  }
};
