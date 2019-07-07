import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import uuid from "../middlewares/uuid-generator"

//const enhancer = applyMiddleware(logger,uuid);
const store = createStore(reducer, applyMiddleware(logger,uuid));

//dev only. No need in prod
window.store = store;

export default store;
