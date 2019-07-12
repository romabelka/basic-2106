import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import generateId from "../middlewares/generateId";
import api from "../middlewares/api";

//const enhancer = applyMiddleware(thunk, generateId, api);
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, generateId, api)
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
