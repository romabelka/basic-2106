import { SELECT_RAITING } from "./constants";

export const selectRaiting = raiting => {
  console.log(raiting);
  return {
    type: SELECT_RAITING,
    payload: { raiting }
  };
};
