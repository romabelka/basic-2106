import { createStore } from "redux";
import reducer from "../reducer";
import { restaurants } from "../fixtures";

const store = createStore(reducer, {
  restaurantsRaiting: { items: restaurants }
}); // 2nd arg is preloaded state

//dev only. No need in prod
window.store = store;

export default store;
