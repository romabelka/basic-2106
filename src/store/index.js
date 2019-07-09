import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import idHandler from "../middlewares/id-handler";

const enhancer = applyMiddleware(logger, idHandler);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
