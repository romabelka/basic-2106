import { CHANGE_MIN_RATING } from "../constants";

export default (minRating = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_MIN_RATING:
      return payload.minRating;

    default:
      return minRating;
  }
};
