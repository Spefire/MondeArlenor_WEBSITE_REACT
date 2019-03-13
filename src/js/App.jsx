//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//Gestion des imports des composants
import Header from "./components/header/Header.jsx";
import ConnexionLogin from "./views/connexion/ConnexionLogin.jsx";
import ConnexionSignUp from "./views/connexion/ConnexionSignUp.jsx";
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
      user: {
        firstName: "Nicholas",
        lastName: "BRUN"
      }
    };
  }

  render() {
    return (
      <Fragment>
        <div style={{margin : "0 10%"}}>
          <div>
            <Header user={this.state.user} />
          </div>
          <main>
            <Switch>
              <Route path="/login" component={ConnexionLogin} />
              <Route path="/signup" component={ConnexionSignUp} />
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
