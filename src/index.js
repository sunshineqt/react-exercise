import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./store/indexAdd";
import store from "./store/index";

// 把Provider放在根组件外层，使得子组件都能获得store
ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
