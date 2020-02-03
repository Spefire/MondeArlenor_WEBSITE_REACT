//Import des bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

//Import des composants
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";

import HomeContainer from "./views/home/HomeContainer.jsx";
import UniverseContainer from "./views/universe/UniverseContainer.jsx";
import CrystalsContainer from "./views/universe/crystals/CrystalsContainer.jsx";
import PopulationContainer from "./views/universe/population/PopulationContainer.jsx";
import ReligionContainer from "./views/universe/religion/ReligionContainer.jsx";

import AboutContainer from "./views/about/AboutContainer.jsx";
import LegacyContainer from "./views/legacy/LegacyContainer.jsx";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class App extends Component {
  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomeContainer} />

            <Route exact path="/universe" component={UniverseContainer} />
            <Route exact path="/universe/religion" component={ReligionContainer} />
            <Route exact path="/universe/crystals" component={CrystalsContainer} />
            <Route exact path="/universe/population" component={PopulationContainer} />

            <Route exact path="/about" component={AboutContainer} />
            <Route exact path="/legacy" component={LegacyContainer} />

            <Route component={HomeContainer} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(App);
