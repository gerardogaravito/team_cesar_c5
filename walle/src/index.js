//------------------------------ import libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

//------------------------------ import components
import App from "./router/app";
import reducer from "./reducers";

//------------------------------ import styles
import "./assets/global-styles/Globalstyles.scss";

const INITIAL_STATE = {
  user: {},
  recipes: {},
  shoppingCart: {},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, INITIAL_STATE, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
