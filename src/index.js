//Gestion des imports bibliothèques
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Gestion des imports de composants
import App from "./js/App";
import store from "./js/redux/index.js";

//Gestion des imports sources
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
