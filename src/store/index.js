// global window
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import reviewWithUuid from "../middlewares/review-with-uuid";

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger, reviewWithUuid];

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);
