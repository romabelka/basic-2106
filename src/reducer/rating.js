import { SET_RATING } from "../constants";

export default (rating = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_RATING:
      return payload.rating;

    default:
      return rating;
  }
};
