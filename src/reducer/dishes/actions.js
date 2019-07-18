import { LOAD_MENU } from "./constants";

export const loadMenu = restaurantId => ({
  type: LOAD_MENU,
  payload: { restaurantId },
  callAPI: `/api/dishes?id=${restaurantId}`
});
