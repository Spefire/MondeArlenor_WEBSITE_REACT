//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Gestion des imports des composants
import Header from "./../../components/header/Header.jsx";
import ConnexionLogin from "./connexion-modules/ConnexionLogin";
import ConnexionSignUp from "./connexion-modules/ConnexionSignUp";
import ConnexionForgotPassword from "./connexion-modules/ConnexionForgotPassword";

//Gestion des fonctionnalités
import { whoIam } from '../../utils/handleConnection.jsx'

//Imports de redux
import { connect } from "react-redux";
import { setUser } from "../../redux/actions.js";

//Gestion des styles
import "./Connexion.scss";

//Déclaration du composant principal
class Connexion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
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
          { isLogged ? <Redirect to="/"/> : null }
          <main>
            <Switch>
              <Route path="/login" component={ConnexionLogin} />
              <Route path="/signup" component={ConnexionSignUp} />
              <Route path="/forgotpassword" component={ConnexionForgotPassword} />
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
)(Connexion)
