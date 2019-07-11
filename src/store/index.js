import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generateId";

const enhancer = applyMiddleware(thunk, generateId, logger);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
