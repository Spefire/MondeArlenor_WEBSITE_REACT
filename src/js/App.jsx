//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//Gestion des imports des composants
import Header from "./components/header/Header.jsx";
import HomeContainer from "./views/home/HomeContainer.jsx";

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
              <Route path='/selection' component={HomeContainer}/>
              <Route path='/offers' component={HomeContainer}/>
            </Switch>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
