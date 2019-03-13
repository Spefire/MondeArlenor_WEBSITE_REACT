//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//Gestion des imports des composants
import Header from "./components/header/Header.jsx";
import HomeContainer from "./views/home/HomeContainer.jsx";
import OffersContainer from "./views/offers/OffersContainer.jsx";

//Gestion des styles
import "../index.scss";

//Déclaration du composant principal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "Nicholas",
        lastName: "BRUN"
      }
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <div className="section-top">
            <Header user={this.state.user} />
          </div>
          <main>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/offers" component={OffersContainer} />
            </Switch>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
