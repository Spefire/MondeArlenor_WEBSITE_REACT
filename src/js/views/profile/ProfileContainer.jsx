//Imports bibliothèques
import React, { Component, Fragment } from "react";

//Imports des composants
import HelpSection from "../../components/help-section/HelpSection.jsx";

//Gestion des fonctionnalités
import { deleteAccount, handleSubscribe, saveNewInfos, saveNewPassword } from '../../utils/requests.jsx';

//Imports de redux
import { connect } from "react-redux";
import { changeLocation } from "../../redux/actions.js";

//Imports des styles
import "./ProfileContainer.scss";

//------------------------------------------------------------------------------------------------------------------
// https://projects.invisionapp.com/d/main/default/#/console/15371446/335515158/preview
//------------------------------------------------------------------------------------------------------------------

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertEmail: "",
      alertFirstName: "",
      alertLastName: "",
      alertNewPassword: "",
      alertNewPasswordConfirmed: "",
      alertOldPassword: "",
      alertPhoneNumber: "",
      infos: {
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      passwords: {
        newPassword: "",
        newPasswordConfirmed: "",
        oldPassword: ""
      },
      showPopin: false
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  changeEmail = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      infos: {
        ...prevState.infos,
        email: newData
      }
    }));
  }

  changeFirstName = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      infos: {
        ...prevState.infos,
        firstName: newData
      }
    }));
  }

  changeLastName = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      infos: {
        ...prevState.infos,
        lastName: newData
      }
    }));
  }

  changeNewPassword = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      passwords: {
        ...prevState.passwords,
        newPassword: newData
      }
    }));
  }

  changeNewPasswordConfirmed = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      passwords: {
        ...prevState.passwords,
        newPasswordConfirmed: newData
      }
    }));
  }

  changeOldPassword = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      passwords: {
        ...prevState.passwords,
        oldPassword: newData
      }
    }));
  }

  changePhoneNumber = (event) => {
    const newData = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      infos: {
        ...prevState.infos,
        phoneNumber: newData
      }
    }));
  }

  closePopin = () => {
    this.setState({ showPopin: false });
  }

  openPopin = () => {
    this.setState({ showPopin: true });
  }

  deleteAccount = () => {
    console.log("DELETE ACCOUNT");
    deleteAccount(this.props.currentLocationAPI);
  }

  handleSubscribing = () => {
    console.log("HANDLE SUBSCRIBING");
    handleSubscribe(this.props.currentLocationAPI, false);
  }

  saveNewInfos = () => {
    var alertFirstName, alertLastName, alertEmail, alertPhoneNumber;
    const { infos } = this.state;

    if (infos.firstName === "") {
      alertFirstName = "Veuillez saisir votre prénom.";
    }

    if (infos.lastName === "") {
      alertLastName = "Veuillez saisir votre nom.";
    }

    var regexEmail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    if (infos.email === "") {
      alertEmail = "Veuillez saisir votre email.";
    } else if (!regexEmail.test(infos.email)) {
      alertEmail = "Veuillez saisir un email valide.";
    }

    var regexPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (infos.phoneNumber === "") {
      alertPhoneNumber = "Veuillez saisir votre numéro de téléphone.";
    } else if (!regexPhone.test(infos.phoneNumber)) {
      alertPhoneNumber = "Veuillez saisir un numéro de téléphone valide.";
    }

    if (!alertFirstName && !alertLastName && !alertEmail && !alertPhoneNumber) {
      saveNewInfos(this.props.currentLocationAPI, infos);
    }

    this.setState({ alertFirstName, alertLastName, alertEmail, alertPhoneNumber });
  }

  saveNewPasswords = () => {
    var alertNewPassword, alertNewPasswordConfirmed, alertOldPassword;
    const { passwords } = this.state;

    if (passwords.oldPassword === "") {
      alertOldPassword = "Veuillez saisir votre ancien mot de passe.";
    }

    var regexPassword = /^(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}[\]:";'<>?,./])(?=.{8,})/;
    if (passwords.newPassword === "") {
      alertNewPassword = "Veuillez saisir votre nouveau mot de passe.";
    } else if (!regexPassword.test(passwords.newPassword)) {
      alertNewPassword = "Votre mot de passe doit contenir au minimum : 1 symbole, 1 chiffre et 8 caractères.";
    }

    if (passwords.newPasswordConfirmed === "") {
      alertNewPasswordConfirmed = "Veuillez confirmer votre nouveau mot de passe.";
    } else if (passwords.newPasswordConfirmed !== passwords.newPassword) {
      alertNewPasswordConfirmed = "Veuillez saisir des mots de passe identiques.";
    }

    if (!alertNewPassword && !alertNewPasswordConfirmed && !alertOldPassword) {
      saveNewPassword(this.props.currentLocationAPI, passwords);
    }

    this.setState({ alertNewPassword, alertNewPasswordConfirmed, alertOldPassword });
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  renderPopin = () => {
    const { showPopin } = this.state;
    if (showPopin) {
      return (
        <div className="container popin-container">
          <div className="container-sections big">
            <div className="section">
              <h2>Supprimer mon compte ?</h2>
              <span>Si vous supprimez votre compte, il ne vous sera plus possible de consulter les documents liés à votre projet.</span>
              <span>Souhaitez-vous vraiment supprimer votre compte ?</span>
              <div>
                <button className="alert" onClick={this.closePopin}>Annuler</button>
                <button className="confirmed" onClick={this.deleteAccount}>Supprimer mon compte</button>
              </div>
            </div>
          </div>
          <div className="container-sections little">
            <HelpSection/>
          </div>
        </div>
      )
    }
  }

  render() {
    const {
      alertEmail,
      alertFirstName,
      alertLastName,
      alertNewPassword,
      alertNewPasswordConfirmed,
      alertOldPassword,
      alertPhoneNumber,
      infos,
      passwords
    } = this.state;

    return (
      <Fragment>
        {this.renderPopin()}
        <div className="container profile-container">

          <div className="container-sections big">
            <div className="section">
              <h2>Mon compte</h2>
              <div>
                <h4>Informations générales</h4>
                <input className={alertFirstName ? 'alert' : ''} value={infos.firstName} type="text" placeholder="Prénom" onChange={this.changeFirstName}/>
                <span className="alert">{alertFirstName}</span>
                <input className={alertLastName ? 'alert' : ''} value={infos.lastName} type="text" placeholder="Nom" onChange={this.changeLastName}/>
                <span className="alert">{alertLastName}</span>
                <input className={alertEmail ? 'alert' : ''} value={infos.email} type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
                <span className="alert">{alertEmail}</span>
                <input className={alertPhoneNumber ? 'alert' : ''} value={infos.phoneNumber} type="tel" placeholder="Numéro de téléphone" onChange={this.changePhoneNumber}/>
                <span className="alert">{alertPhoneNumber}</span>
              </div>
              <button className="confirmed" onClick={this.saveNewInfos}>Enregistrer les changements</button>
              <div>
                <h4>Changer de mot de passe</h4>
                <input className={alertOldPassword ? 'alert' : ''} value={passwords.oldPassword} type="password" placeholder="Ancien mot de passe" onChange={this.changeOldPassword}/>
                <span className="alert">{alertOldPassword}</span>
                <input className={alertNewPassword ? 'alert' : ''} value={passwords.newPassword} type="password" placeholder="Nouveau mot de passe" onChange={this.changeNewPassword}/>
                <span className="alert">{alertNewPassword}</span>
                <input className={alertNewPasswordConfirmed ? 'alert' : ''} value={passwords.newPasswordConfirmed} type="password" placeholder="Confirmer nouveau mot de passe" onChange={this.changeNewPasswordConfirmed}/>
                <span className="alert">{alertNewPasswordConfirmed}</span>
              </div>
              <button className="confirmed" onClick={this.saveNewPasswords}>Valider</button>
            </div>

            <div className="section">
              <div className="profile-options">
                <span>Vous ne souhaitez plus recevoir nos emails ?</span>
                <button className="alert" onClick={this.handleSubscribing}>Se désabonner</button>
              </div>
              <div className="profile-options">
                <span>Vous souhaitez supprimer votre compte ?</span>
                <button className="alert" onClick={this.openPopin}>Supprimer mon compte</button>
              </div>
            </div>
          </div>

          <div className="container-sections little">
            <HelpSection/>
          </div>
        </div>
      </Fragment>
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
)(ProfileContainer);
