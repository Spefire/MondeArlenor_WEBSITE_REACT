//Imports bibliothèques
import React, { Component } from "react";

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
      password: "",
      phoneNumber: ""
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
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

  deleteAccount = () => {
    console.log("DELETE ACCOUNT");
  }

  seeProjectSteps = () => {
    console.log("SEE PROJECT STEPS");
  }

  sendNewPassword = () => {
    console.log("SEND NEW PASSWORD");
  }

  unsubscribe = () => {
    console.log("UNSUBSCRIBE");
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
      <div className="container profile-container">

        <div className="section section-left">
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
          <div>
            <h4>Changer de mot de passe</h4>
            <input className={alertPassword ? 'alert' : ''} value={password} type="password" placeholder="Ancien mot de passe" onChange={this.changePassword}/>
            <span className="alert">{alertPassword}</span>
            <input className={alertNewPassword ? 'alert' : ''} value={newPassword} type="password" placeholder="Nouveau mot de passe" onChange={this.changeNewPassword}/>
            <span className="alert">{alertNewPassword}</span>
            <input className={alertNewPasswordConfirmed ? 'alert' : ''} value={newPasswordConfirmed} type="password" placeholder="Confirmer nouveau mot de passe" onChange={this.changeNewPasswordConfirmed}/>
            <span className="alert">{alertNewPasswordConfirmed}</span>
          </div>
          <button className="confirmed" onClick={this.sendNewPassword}>Valider</button>
        </div>

        <div className="section section-right">
          <button onClick={this.seeProjectSteps}>Voir les étapes de votre projet</button>
          <h4>Une question ? Posez-la directement à l'un de nos experts en ligne.</h4>
          <div className="profile-point">
            <div className="point">?</div>
            <span>Vous souhaitez réserver une visite ?</span>
          </div>
          <div className="profile-point">
            <div className="point">?</div>
            <span>Vous souhaitez faire une offre sur un bien ?</span>
          </div>
          <div className="profile-point">
            <div className="point">?</div>
            <span>Vous souhaitez télécharger des documents supplémentaires ?</span>
          </div>
        </div>
        
        <div className="section section-left">
          <div className="profile-options">
            <span>Vous ne souhaitez plus recevoir nos emails ?</span>
            <button className="alert" onClick={this.unsubscribe}>Se désabonner</button>
          </div>
          <div className="profile-options">
            <span>Vous souhaitez supprimer votre compte ?</span>
            <button className="alert" onClick={this.deleteAccount}>Supprimer mon compte</button>
          </div>
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
)(ProfileContainer);
