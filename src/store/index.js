import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generateId";
import api from "../middlewares/api";

const enhancer = applyMiddleware(thunk, generateId, api, logger);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
