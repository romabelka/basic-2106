import { FILTER_RATE } from "../constants";

export default (filterRate = "", action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_RATE:
      return payload;

    default:
      return filterRate;
  }
};
