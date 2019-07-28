import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import reducer from "../reducer";
import generateId from "../middlewares/generateId";
import api from "../middlewares/api";
import history from "../history";

const middlewares = [thunk, routerMiddleware(history), generateId, api];

const enhancer = applyMiddleware(...middlewares);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
