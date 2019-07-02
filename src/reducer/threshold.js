import { SET_THRESHOLD } from "../constants";

export default (threshold = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THRESHOLD:
      // это правильно?
      return payload ? payload.threshold : 0;

    default:
      return threshold;
  }
};
