import { SET_MIN_RATING } from "../constants";

const initialState = {
  minRating: 0
};

export default (filters = initialState, { type, payload }) => {
  switch (type) {
    case SET_MIN_RATING:
      return { ...filters, minRating: payload.minRating };

    default:
      return filters;
  }
};
