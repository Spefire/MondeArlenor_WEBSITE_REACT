//Imports bibliothèques
import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

//Imports des composants
import ConnexionSection from '../../../components/connexion-section/ConnexionSection';

//Gestion des fonctionnalités
import { signup } from '../../../utils/requests.jsx'

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
      nextStep: false,
      user : {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmed: "",
        phoneNumber: ""
      },
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  checkFirstStep = () => {
    var alertEmail, alertPassword, alertPasswordConfirmed;
    const { user } = this.state;

    var regexEmail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    if (user.email === "") {
      alertEmail = "Veuillez saisir votre email.";
    } else if (!regexEmail.test(user.email)) {
      alertEmail = "Veuillez saisir un email valide.";
    }

    var regexPassword = /^(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}[\]:";'<>?,./])(?=.{8,})/;
    if (user.password === "") {
      alertPassword = "Veuillez saisir votre mot de passe.";
    } else if (!regexPassword.test(user.password)) {
      alertPassword = "Votre mot de passe doit contenir au minimum : 1 symbole, 1 chiffre et 8 caractères.";
    }

    if (user.passwordConfirmed === "") {
      alertPasswordConfirmed = "Veuillez confirmer votre mot de passe.";
    } else if (user.passwordConfirmed !== user.password) {
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
    const { user } = this.state;

    if (user.firstName === "") {
      alertFirstName = "Veuillez saisir votre prénom.";
    }

    if (user.lastName === "") {
      alertLastName = "Veuillez saisir votre nom.";
    }

    var regexPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (user.phoneNumber === "") {
      alertPhoneNumber = "Veuillez saisir votre numéro de téléphone.";
    } else if (!regexPhone.test(user.phoneNumber)) {
      alertPhoneNumber = "Veuillez saisir un numéro de téléphone valide.";
    }

    if (!alertFirstName && !alertLastName && !alertPhoneNumber) {
      signup(this.props.currentLocationAPI, user);
    }

    this.setState({
      alertFirstName: alertFirstName,
      alertLastName: alertLastName,
      alertPhoneNumber: alertPhoneNumber
    });
  }

  changeEmail = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      user: {
        ...prevState.user,
        email: newData
      }
    }));
  }

  changeFirstName = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      user: {
        ...prevState.user,
        firstName: newData
      }
    }));
  }

  changeLastName = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      user: {
        ...prevState.user,
        lastName: newData
      }
    }));
  }

  changePassword = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      user: {
        ...prevState.user,
        password: newData
      }
    }));
  }

  changePasswordConfirmed = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      user: {
        ...prevState.user,
        passwordConfirmed: newData
      }
    }));
  }

  changePhoneNumber = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      user: {
        ...prevState.user,
        phoneNumber: newData
      }
    }));
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  renderFirstStep = () => {
    const {
      alertEmail,
      alertPassword,
      alertPasswordConfirmed,
      user
    } = this.state;

    return (
      <Fragment>
        <div className="container-sections">
          <div className="section">
            <div className="connexion-title right">
              <h2>Bienvenue dans<br></br>votre espace </h2><h2 className="title">Cassini</h2>
            </div>
            <div>
              <input className={alertEmail ? 'alert' : ''} value={user.email} type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
              <span className="alert">{alertEmail}</span>
              <input className={alertPassword ? 'alert' : ''} value={user.password} type="password" placeholder="Mot de passe" onChange={this.changePassword}/>
              <span className="alert">{alertPassword}</span>
              <input className={alertPasswordConfirmed ? 'alert' : ''} value={user.passwordConfirmed} type="password" placeholder="Confirmez votre mot de passe" onChange={this.changePasswordConfirmed}/>
              <span className="alert">{alertPasswordConfirmed}</span>
            </div>
            <div className="connexion-end">
              <Link className="link" to={"/login"}>Vous avez déjà un compte ?</Link>
              <button className="confirmed" onClick={this.checkFirstStep}>S'inscrire</button>
            </div>
          </div>
        </div>
        <div className="container-sections">
          <ConnexionSection/>
        </div>
      </Fragment>
    );
  }

  renderLastStep = () => {
    const {
      alertFirstName,
      alertLastName,
      alertPhoneNumber,
      user,
    } = this.state;

    return (
      <Fragment>
        <div className="container-sections">
          <div className="section">
            <div className="connexion-title right">
              <h2>Informations complémentaires<br></br>Quelques informations pour mieux vous connaître</h2>
            </div>
            <div>
              <input className={alertFirstName ? 'alert' : ''} value={user.firstName} type="text" placeholder="Prénom" onChange={this.changeFirstName}/>
              <span className="alert">{alertFirstName}</span>
              <input className={alertLastName ? 'alert' : ''} value={user.lastName} type="text" placeholder="Nom" onChange={this.changeLastName}/>
              <span className="alert">{alertLastName}</span>
              <input className={alertPhoneNumber ? 'alert' : ''} value={user.phoneNumber} type="tel" placeholder="Numéro de téléphone" onChange={this.changePhoneNumber}/>
              <span className="alert">{alertPhoneNumber}</span>
            </div>
            <div className="connexion-end end">
              <button className="confirmed" onClick={this.checkLastStep}>Valider</button>
            </div>
          </div>
        </div>
        <div className="container-sections">
          <div className="section">
            <div className="connexion-title left">
              <h2>Pourquoi vous demander ces informations ?</h2>
            </div>
            <p>Ces informations ne seront utilisées qu’en cas de visite ou de constitution d’un dossier. Si vous n’êtes pas encore décidé, vous pouvez passer cette étape, nous verrons ça plus tard.</p>
          </div>
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
