import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux"
import store from "../app/store"

function render() {
// const App = require('./App').default

  ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
   document.getElementById('root')
  )
}

render();

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./App', render)
// }