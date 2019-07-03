import { SELECT_CHANGE } from "../constants";

export default (filter = "1", action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_CHANGE:
      console.log("--- PAYLOAD:", payload);
      return payload;
    default:
      return filter;
  }
};
