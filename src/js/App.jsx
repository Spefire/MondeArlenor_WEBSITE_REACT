//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Gestion des imports des composants
import Header from "./components/header/Header.jsx";
import HomeContainer from "./views/home/HomeContainer.jsx";
import OffersContainer from "./views/offers/OffersContainer.jsx";
import ProfileContainer from "./views/profile/ProfileContainer.jsx";

//Gestion des styles
import "../index.scss";

//Déclaration du composant principal
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  render() {
    const { isLogged } = this.state;
    return (
      <Fragment>
        <div>
          <Header />
          { !isLogged ? <Redirect to="/login"/> : null }
          <main>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/offers" component={OffersContainer} />
              <Route path="/profile" component={ProfileContainer} />
            </Switch>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
