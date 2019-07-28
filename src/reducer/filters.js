import { Record } from "immutable";
import { SET_MIN_RATING } from "../constants";

const ReducerState = Record({
  minRating: 0
});

export default (filters = new ReducerState(), { type, payload }) => {
  if (type === SET_MIN_RATING) {
    return filters.set("minRating", payload.minRating);
  }

  return filters;
};
