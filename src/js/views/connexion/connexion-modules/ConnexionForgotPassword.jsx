//Imports bibliothèques
import React, { Component } from "react";

//Imports de redux
import { connect } from "react-redux";
import { changeLocation } from "../../../redux/actions.js";

//------------------------------------------------------------------------------------------------------------------
// https://projects.invisionapp.com/d/main/default/#/console/15371446/332675601/preview
//------------------------------------------------------------------------------------------------------------------

class ConnexionForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirmed: ""
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
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
    return (
      <div className="container">
        <div className="section">
          <div className="section-title right">
            <h2>Connectez vous à<br></br> votre espace </h2><h2 className="title">Cassini</h2>
          </div>
          <form>
            <input type="email" placeholder="Adresse email" onChange={this.changeEmail}/>
            <input type="password" placeholder="Nouveau mot de passe" onChange={this.changePassword}/>
            <input type="password" placeholder="Confirmez votre mot de passe" onChange={this.changePasswordConfirmed}/>
          </form>
          <button>Valider votre nouveau mot de passe</button>
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
)(ConnexionForgotPassword);
