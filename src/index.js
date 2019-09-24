//Import des bibliothèques
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//Import de composants
import App from "./js/App";
import store from "./js/redux/index.js";

//Import des styles
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
