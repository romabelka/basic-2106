import { SET_RATE } from "../constants";

export default (rate = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_RATE:
      return {
        ...rate,
        [payload.id]: payload.rate || 0
      };

    default:
      return rate;
  }
};
