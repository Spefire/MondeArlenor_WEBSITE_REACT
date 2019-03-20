//Gestion des imports bibliothèques
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Gestion des fonctionnalités
import { logout } from '../../utils/requests.jsx'

//Gestion du redux
import { connect } from "react-redux";

//Gestion des styles
import "./Header.scss";

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showNavProfile: false
    }
  }

  handleDeconnexion = () => {
    logout(this.props.currentLocationAPI);
  }

  handleNavProfile = (value) => {
    this.setState({
      showNavProfile: value
    })
  }

  renderNavProfile = () => {
    const { currentLocation } = this.props;
    const { showNavProfile } = this.state;

    return (
      <div>
        <div className={currentLocation === "/profile" ? "header-button activated" : "header-button"} onClick={() => this.handleNavProfile(!showNavProfile)}>
          <span>{"Nicholas BRUN"}</span>
        </div>
        {
          this.state.showNavProfile ? (
            <div className="nav-list" onClick={() => this.handleNavProfile(false)}>
              <Link to={"/profile"}>{"Mon compte"}</Link>
              <span onClick={() => { this.handleDeconnexion() }}>{"Déconnexion"}</span>
            </div>
          ) : (null)
        }
      </div>
    )
  }

  render() {
    const { currentLocation, isLogged } = this.props;

    return (
      <header>
        <div className="nav-section">
          <div className={"header-title header-button activated"} onClick={() => this.handleNavProfile(false)}>
            <Link to={"/"}>{"Cassini"}</Link>
          </div>
          { isLogged ? (
            <nav>
              <div className={currentLocation === "/" ? "header-button activated" : "header-button"} onClick={() => this.handleNavProfile(false)}>
                <Link to={"/"}>{"Ma sélection"}</Link>
              </div>
              <div className={currentLocation === "/offers" ? "header-button activated" : "header-button"} onClick={() => this.handleNavProfile(false)}>
                <Link to={"/offers"}>{"Mes offres"}</Link>
              </div>
              { this.renderNavProfile() }
            </nav>
          ) : (null)}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation,
    currentLocationAPI: state.currentLocationAPI
  };
};

export default connect(mapStateToProps)(Header);
