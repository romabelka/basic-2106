import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./i18n";
import App from "./app";
import store from "./store";
import history from "./history";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
