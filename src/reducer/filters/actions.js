import { SET_MIN_RATING } from "./constants";

export const setMinRating = minRating => ({
  type: SET_MIN_RATING,
  payload: { minRating }
});
