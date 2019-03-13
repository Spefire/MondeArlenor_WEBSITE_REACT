//Gestion des imports bibliothèques
import React, { Component } from "react";
import { Link } from 'react-router-dom';

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

  deconnexion() {
    console.log("DECONNEXION");
  }

  handleNavProfile(value) {
    this.setState({
      showNavProfile: value
    })
  }

  render() {
    const { currentLocation } = this.props;
    const { showNavProfile } = this.state;

    return (
      <header>
        <div className={"navButton activated"} onClick={() => this.handleNavProfile(false)}>
          <Link to={"/"}>{"CASSINI"}</Link>
        </div>
        <nav>
          <div className={currentLocation === "/" ? "navButton activated" : "navButton"} onClick={() => this.handleNavProfile(false)}>
            <Link to={"/"}>{"Ma sélection"}</Link>
          </div>
          <div className={currentLocation === "/offers" ? "navButton activated" : "navButton"} onClick={() => this.handleNavProfile(false)}>
            <Link to={"/offers"}>{"Mes offres"}</Link>
          </div>
          <div>
            <div className={currentLocation === "/profile" ? "navButton activated" : "navButton"} onClick={() => this.handleNavProfile(!showNavProfile)}>
              <span>{"Nicholas BRUN"}</span>
            </div>
            {
              this.state.showNavProfile ? (
                <div className="navList" onClick={() => this.handleNavProfile(false)}>
                  <Link to={"/profile"}>{"Mon compte"}</Link>
                  <span onClick={() => { this.deconnexion() }}>{"Déconnexion"}</span>
                </div>
              ) : (null)
            }
          </div>
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
