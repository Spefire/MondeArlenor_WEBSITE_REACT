//Imports bibliothèques
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Imports des composants
import ConnexionSection from '../../../components/connexion-section/ConnexionSection';

//Gestion des fonctionnalités
import { login } from '../../../utils/handleConnection.jsx'

//Imports de redux
import { connect } from "react-redux";
import { changeLocation } from "../../../redux/actions.js";

//------------------------------------------------------------------------------------------------------------------
// https://projects.invisionapp.com/d/main/default/#/console/15371446/332675601/preview
//------------------------------------------------------------------------------------------------------------------

class ConnexionLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertEmail: "",
      alertPassword: "",
      email: "",
      password: ""
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  checkLogin = () => {
    var alertEmail, alertPassword;
    const { email, password } = this.state;

    var regexEmail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    if (email === "") {
      alertEmail = "Veuillez saisir votre email.";
    } else if (!regexEmail.test(email)) {
      alertEmail = "Veuillez saisir un email valide.";
    }/* else if ( email ) {
      alertEmail = "Votre email n'existe pas, veuillez vous inscrire dans un premier temps.";
    }*/

    if (password === "") {
      alertPassword = "Veuillez saisir votre mot de passe.";
    }

    if (!alertEmail && !alertPassword) {
      login(this.props.currentLocationAPI, email, password);
    }

    this.setState({ alertEmail: alertEmail, alertPassword: alertPassword });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  renderIDSection = () => {
    const {
      alertEmail,
      alertPassword,
      email,
      password
    } = this.state;

    return (
      <div className="section">
        <div className="connexion-title right">
          <h2>Connectez vous à<br></br>votre espace </h2><h2 className="title">Cassini</h2>
        </div>
        <div>
          <input className={alertEmail ? 'alert' : ''} value={email} type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
          <span className="alert">{alertEmail}</span>
          <input className={alertPassword ? 'alert' : ''} value={password} type="password" placeholder="Mot de passe" onChange={this.changePassword}/>
          <span className="alert">{alertPassword}</span>
          <Link className="link" to={"/forgotpassword"}>Mot de passe oublié ?</Link>
        </div>
        <div className="connexion-end">
          <Link className="link" to={"/signup"}>Vous n'avez pas encore créé de compte ?</Link>
          <button className="confirmed" onClick={this.checkLogin}>Se connecter</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container connexion-container">
        <div className="container-sections">
          { this.renderIDSection() }
        </div>
        <div className="container-sections">
          <ConnexionSection/>
        </div>
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

const mapStateToProps = state => {
  return {
    currentLocationAPI : state.currentLocationAPI
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnexionLogin);
