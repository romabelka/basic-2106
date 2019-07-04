import { SELECT_CHANGE } from "../constants";

export default (filterValue = "1", action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_CHANGE:
      return payload;
    default:
      return filterValue;
  }
};
