import { SET_MIN_RATING } from "../constants";

export default (rating = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MIN_RATING:
      return payload;
    default:
      return rating;
  }
};
