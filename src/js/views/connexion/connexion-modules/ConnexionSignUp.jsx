//Imports bibliothèques
import React, { Component, Fragment } from "react";
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
      alertFirstName: "",
      alertLastName: "",
      alertPassword: "",
      alertPasswordConfirmed: "",
      alertPhoneNumber: "",
      email: "",
      firstName: "",
      lastName: "",
      nextStep: false,
      password: "",
      passwordConfirmed: "",
      phoneNumber: ""
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  checkFirstStep = () => {
    var alertEmail, alertPassword, alertPasswordConfirmed;
    const { email, password, passwordConfirmed } = this.state;

    var regexEmail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    if (email === "") {
      alertEmail = "Veuillez saisir votre email.";
    } else if (!regexEmail.test(email)) {
      alertEmail = "Veuillez saisir un email valide.";
    }

    var regexPassword = /^(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}[\]:";'<>?,./])(?=.{8,})/;
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

    this.setState({
      alertEmail: alertEmail,
      alertPassword: alertPassword,
      alertPasswordConfirmed: alertPasswordConfirmed,
      nextStep: (!alertEmail && !alertPassword && !alertPasswordConfirmed)
    });
  }

  checkLastStep = () => {
    var alertFirstName, alertLastName, alertPhoneNumber;
    const { firstName, lastName, phoneNumber } = this.state;

    if (firstName === "") {
      alertFirstName = "Veuillez saisir votre prénom.";
    }

    if (lastName === "") {
      alertLastName = "Veuillez saisir votre nom.";
    }

    var regexPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (phoneNumber === "") {
      alertPhoneNumber = "Veuillez saisir votre numéro de téléphone.";
    } else if (!regexPhone.test(phoneNumber)) {
      alertPhoneNumber = "Veuillez saisir un numéro de téléphone valide.";
    }

    this.setState({
      alertFirstName: alertFirstName,
      alertLastName: alertLastName,
      alertPhoneNumber: alertPhoneNumber
    });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  }

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  changePasswordConfirmed = (event) => {
    this.setState({ passwordConfirmed: event.target.value });
  }

  changePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  }

  renderFirstStep = () => {
    const {
      alertEmail,
      alertPassword,
      alertPasswordConfirmed,
      email,
      password,
      passwordConfirmed
    } = this.state;

    return (
      <Fragment>
        <div className="section">
          <div className="connexion-title right">
            <h2>Bienvenue dans<br></br>votre espace </h2><h2 className="title">Cassini</h2>
          </div>
          <div>
            <input className={alertEmail ? 'alert' : ''} value={email} type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
            <span className="alert">{alertEmail}</span>
            <input className={alertPassword ? 'alert' : ''} value={password} type="password" placeholder="Mot de passe" onChange={this.changePassword}/>
            <span className="alert">{alertPassword}</span>
            <input className={alertPasswordConfirmed ? 'alert' : ''} value={passwordConfirmed} type="password" placeholder="Confirmez votre mot de passe" onChange={this.changePasswordConfirmed}/>
            <span className="alert">{alertPasswordConfirmed}</span>
          </div>
          <div className="connexion-end">
            <Link className="link" to={"/login"}>Vous avez déjà un compte ?</Link>
            <button className="confirmed" onClick={this.checkFirstStep}>S'inscrire</button>
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
      </Fragment>
    );
  }

  renderLastStep = () => {
    const {
      alertFirstName,
      alertLastName,
      alertPhoneNumber,
      firstName,
      lastName,
      phoneNumber
    } = this.state;

    return (
      <Fragment>
        <div className="section">
          <div className="connexion-title right">
            <h2>Informations complémentaires<br></br>Quelques informations pour mieux vous connaître</h2>
          </div>
          <div>
            <input className={alertFirstName ? 'alert' : ''} value={firstName} type="text" placeholder="Prénom" onChange={this.changeFirstName}/>
            <span className="alert">{alertFirstName}</span>
            <input className={alertLastName ? 'alert' : ''} value={lastName} type="text" placeholder="Nom" onChange={this.changeLastName}/>
            <span className="alert">{alertLastName}</span>
            <input className={alertPhoneNumber ? 'alert' : ''} value={phoneNumber} type="tel" placeholder="Numéro de téléphone" onChange={this.changePhoneNumber}/>
            <span className="alert">{alertPhoneNumber}</span>
          </div>
          <div className="connexion-end end">
            <button className="confirmed" onClick={this.checkLastStep}>Valider</button>
          </div>
        </div>
        <div className="section">
          <div className="connexion-title left">
            <h2>Pourquoi vous demander ces informations ?</h2>
          </div>
          <p>Ces informations ne seront utilisées qu’en cas de visite ou de constitution d’un dossier. Si vous n’êtes pas encore décidé, vous pouvez passer cette étape, nous verrons ça plus tard.</p>
        </div>
      </Fragment>
    );
  }

  render() {
    const { nextStep } = this.state;

    return (
      <div className="container connexion-container">
        { nextStep ? this.renderLastStep() : this.renderFirstStep() }
      </div>
    )
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
