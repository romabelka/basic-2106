import { SELECT_RAITING } from "./constants";

export const selectRaiting = restaurantsRaiting => {
  return {
    type: SELECT_RAITING,
    payload: { restaurantsRaiting }
  };
};
