import { SELECT_RAITING } from "./constants";

export default (raiting = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_RAITING:
      return payload.raiting;

    default:
      return raiting;
  }
};
