//Gestion des imports bibliothèques
import React, { Component } from "react";

//Gestion des imports des composants
import HeaderButton from "../buttons/HeaderButton.jsx";

//Gestion du redux
import { connect } from "react-redux";

//Gestion des styles
import "./Header.scss";

class Header extends Component {
  render() {
    const currentLocation = this.props.currentLocation;
    return (
      <header>
        <div>
          <HeaderButton isActivated textContent="CASSINI" link="/" />
        </div>
        <nav>
          <HeaderButton
            isActivated={currentLocation === "/"}
            textContent="Ma sélection"
            link="/"
          />
          <HeaderButton
            isActivated={currentLocation === "/offers"}
            textContent="Mes offres"
            link="/offers"
          />
          <HeaderButton
            isActivated={currentLocation === "/profile"}
            textContent="Zachary Franc"
            link="/profile"
          />
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation
  };
};

export default connect(mapStateToProps)(Header);
