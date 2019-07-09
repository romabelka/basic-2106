import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import uniqueId from "../middlewares/unique-id";

const enhancer = applyMiddleware(logger, uniqueId);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
