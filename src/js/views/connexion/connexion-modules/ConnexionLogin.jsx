//Imports bibliothèques
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Gestion des imports des images
import videoLoginSrc from'../../../../assets/videos/video01.webm'

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

  render() {
    const {
      alertEmail,
      alertPassword,
      email,
      password
    } = this.state;

    return (
      <div className="container connexion-container">

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

        <div className="section">
          <div className="connexion-title left">
            <h2>Pourquoi<br></br>créer un compte ?</h2>
          </div>
          <div className="connexion-point">
            <div className="point">1</div>
            <span>Accéder à des annonces immobilières qui vous disent enfin tout (photos supplémentaires , plans 3D, diagnostics, etc.)</span>
          </div>
          <div className="connexion-point">
            <div className="point">2</div>
            <span>Organiser vos visites en ligne en quelques clics et visiter des logements en toute autonomie, avec un agent à distance</span>
          </div>
          <div className="connexion-point">
            <div className="point">3</div>
            <span>Profiter de l’accompagnement gratuit d’un expert à chaque étape de votre projet</span>
          </div>
          <div className="connexion-point">
            <div className="point">4</div>
            <span>Bénéficier de services rigoureusement sélectionnés par Monemprunt.com pour me financer, faire réaliser des travaux, organiser mon déménagement et mes changements d’adresses, etc.</span>
          </div>
          <video controls width="250">
            <source src={videoLoginSrc} type="video/webm"/>
            Sorry, your browser doesn't support embedded videos.
          </video>
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
