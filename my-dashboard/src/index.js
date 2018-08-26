import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConfigureStore } from "./Store/ConfigureStore";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
