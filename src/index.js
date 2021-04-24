import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import "./fonts/avenir.otf";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
