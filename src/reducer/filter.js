import { SET_MIN_RATING } from "../constants";

export default (filter = 1, action) => {
  const { type, payload } = action;
  if (type === SET_MIN_RATING) {
    return payload;
  }
  return filter;
};
