import { SET_MIN_RATING } from "../constants";
import { Map } from "immutable";

const initialState = new Map({
  minRating: 0
});

export default (filters = initialState, { type, payload }) => {
  switch (type) {
    case SET_MIN_RATING:
      return filters.setIn(["minRating"], payload.minRating);

    default:
      return filters;
  }
};
