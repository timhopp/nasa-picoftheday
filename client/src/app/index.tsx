import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux"
import store from "../app/store"
import { Auth0Provider } from "../app/features/auth0/auth0-context";
import { BrowserRouter } from 'react-router-dom';



function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Auth0Provider>
        <BrowserRouter>
  <App />
  </BrowserRouter>
      </Auth0Provider>
  </Provider>,
   document.getElementById('root')
  )
}

render();
