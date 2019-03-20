//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Gestion des imports des composants
import Header from "./components/header/Header.jsx";
import HomeContainer from "./views/home/HomeContainer.jsx";
import OffersContainer from "./views/offers/OffersContainer.jsx";
import ProfileContainer from "./views/profile/ProfileContainer.jsx";
import NotFoundContainer from "./views/notfound/NotFoundContainer.jsx";

//Gestion des fonctionnalités
import { whoIam } from './utils/requests.jsx';

//Imports de redux
import { connect } from "react-redux";
import { setUser } from "./redux/actions.js";

//Gestion des styles
import "../index.scss";

//Déclaration du composant principal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true
    };
  }

  componentDidMount() {
    whoIam(this.props.currentLocationAPI);
  }

  render() {
    const { isLogged } = this.state;
    return (
      <Fragment>
        <div>
          <Header isLogged={isLogged}/>
          {!isLogged ? <Redirect to="/login" /> : null}
          <main>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/offers" component={OffersContainer} />
              <Route path="/profile" component={ProfileContainer} />
              <Route component={NotFoundContainer} />
            </Switch>
          </main>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLocationAPI : state.currentLocationAPI
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)