import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';

import App from "./App"

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
reportWebVitals();


