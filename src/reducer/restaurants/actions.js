import { SELECT_RAITING } from "./constants";

export const selectRaiting = raiting => ({
  type: SELECT_RAITING,
  payload: { raiting }
});
