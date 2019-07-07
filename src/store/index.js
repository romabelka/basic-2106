import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import idGenerator from "../middlewares/id-generator";

const enhancer = applyMiddleware(logger, idGenerator);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
