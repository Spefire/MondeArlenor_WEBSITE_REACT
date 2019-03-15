//Imports bibliothèques
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Gestion des imports des images
import videoLoginSrc from'../../../../assets/videos/video01.webm'

//Imports de redux
import { connect } from "react-redux";
import { changeLocation } from "../../../redux/actions.js";

//------------------------------------------------------------------------------------------------------------------
// https://projects.invisionapp.com/d/main/default/#/console/15371446/332675600/preview
//------------------------------------------------------------------------------------------------------------------

class ConnexionSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertEmail: "",
      alertPassword: "",
      alertPasswordConfirmed: "",
      email: "",
      password: "",
      passwordConfirmed: ""
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  checkSignUp = () => {
    var alertEmail, alertPassword, alertPasswordConfirmed;
    const { email, password, passwordConfirmed } = this.state;

    var regexEmail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    if (email === "") {
      alertEmail = "Veuillez saisir votre email.";
    } else if (!regexEmail.test(email)) {
      alertEmail = "Veuillez saisir un email valide.";
    }

    var regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (password === "") {
      alertPassword = "Veuillez saisir votre mot de passe.";
    } else if (!regexPassword.test(password)) {
      alertPassword = "Votre mot de passe doit contenir au minimum : 1 symbole, 1 chiffre et 8 caractères.";
    }

    if (passwordConfirmed === "") {
      alertPasswordConfirmed = "Veuillez confirmer votre mot de passe.";
    } else if (passwordConfirmed !== password) {
      alertPasswordConfirmed = "Veuillez saisir des mots de passe identiques.";
    }

    this.setState({ alertEmail: alertEmail, alertPassword: alertPassword, alertPasswordConfirmed: alertPasswordConfirmed });
  }

  changeEmail = (value) => {
    this.setState({ email: value });
  }

  changePassword = (value) => {
    this.setState({ password: value });
  }

  changePasswordConfirmed = (value) => {
    this.setState({ passwordConfirmed: value });
  }

  render() {
    const { alertEmail, alertPassword, alertPasswordConfirmed } = this.state;

    return (
      <div className="container">
        <div className="section">
          <div className="section-title right">
            <h2>Bienvenue dans<br></br>votre espace </h2><h2 className="title">Cassini</h2>
          </div>
          <form>
            <input type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
            <span>{alertEmail}</span>
            <input type="password" placeholder="Mot de passe" onChange={this.changePassword}/>
            <span>{alertPassword}</span>
            <input type="password" placeholder="Confirmez votre mot de passe" onChange={this.changePasswordConfirmed}/>
            <span>{alertPasswordConfirmed}</span>
          </form>
          <Link className="link" to={"/login"}>Vous avez déjà un compte ?</Link>
          <button onClick={this.checkSignUp}>S'inscrire</button>
        </div>
        <div className="section">
          <div className="section-title left">
            <h2>Pourquoi créer un compte ?</h2>
          </div>
          <div className="section-point">
            <div className="point">1</div>
            <span>Accéder à des annonces immobilières qui vous disent enfin tout (photos supplémentaires , plans 3D, diagnostics, etc.)</span>
          </div>
          <div className="section-point">
            <div className="point">2</div>
            <span>Organiser vos visites en ligne en quelques clics et visiter des logements en toute autonomie, avec un agent à distance</span>
          </div>
          <div className="section-point">
            <div className="point">3</div>
            <span>Profiter de l’accompagnement gratuit d’un expert à chaque étape de votre projet</span>
          </div>
          <div className="section-point">
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

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ConnexionSignUp);
