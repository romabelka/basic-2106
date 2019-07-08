import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";

const enhancer = applyMiddleware(logger);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
