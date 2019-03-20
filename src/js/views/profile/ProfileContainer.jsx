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
      alertPassword: "",
      alertPhoneNumber: "",
      email: "",
      firstName: "",
      lastName: "",
      newPassword: "",
      newPasswordConfirmed: "",
      showPopin: false,
      password: "",
      phoneNumber: ""
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  }

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  }

  changeNewPassword = (event) => {
    this.setState({ newPassword: event.target.value });
  }

  changeNewPasswordConfirmed = (event) => {
    this.setState({ newPasswordConfirmed: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  changePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
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
    handleSubscribe(this.props.currentLocationAPI);
  }

  saveNewInfos = () => {
    console.log("SAVE NEW INFOS");
    saveNewInfos(this.props.currentLocationAPI);
  }

  saveNewPassword = () => {
    console.log("SAVE NEW PASSWORD");
    saveNewPassword(this.props.currentLocationAPI);
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
      alertPassword,
      alertPhoneNumber,
      email,
      firstName,
      lastName,
      newPassword,
      newPasswordConfirmed,
      password,
      phoneNumber
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
                <input className={alertFirstName ? 'alert' : ''} value={firstName} type="text" placeholder="Prénom" onChange={this.changeFirstName}/>
                <span className="alert">{alertFirstName}</span>
                <input className={alertLastName ? 'alert' : ''} value={lastName} type="text" placeholder="Nom" onChange={this.changeLastName}/>
                <span className="alert">{alertLastName}</span>
                <input className={alertEmail ? 'alert' : ''} value={email} type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
                <span className="alert">{alertEmail}</span>
                <input className={alertPhoneNumber ? 'alert' : ''} value={phoneNumber} type="tel" placeholder="Numéro de téléphone" onChange={this.changePhoneNumber}/>
                <span className="alert">{alertPhoneNumber}</span>
              </div>
              <button className="confirmed" onClick={this.saveNewInfos}>Enregistrer les changements</button>
              <div>
                <h4>Changer de mot de passe</h4>
                <input className={alertPassword ? 'alert' : ''} value={password} type="password" placeholder="Ancien mot de passe" onChange={this.changePassword}/>
                <span className="alert">{alertPassword}</span>
                <input className={alertNewPassword ? 'alert' : ''} value={newPassword} type="password" placeholder="Nouveau mot de passe" onChange={this.changeNewPassword}/>
                <span className="alert">{alertNewPassword}</span>
                <input className={alertNewPasswordConfirmed ? 'alert' : ''} value={newPasswordConfirmed} type="password" placeholder="Confirmer nouveau mot de passe" onChange={this.changeNewPasswordConfirmed}/>
                <span className="alert">{alertNewPasswordConfirmed}</span>
              </div>
              <button className="confirmed" onClick={this.saveNewPassword}>Valider</button>
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
