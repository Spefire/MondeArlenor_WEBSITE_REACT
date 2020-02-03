//Import des bibliothèques
import React, { Component } from "react";

//Import du redux
import { connect } from "react-redux";

//Import des styles
import "./Header.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Header",
      listDisplayed: false
    };
  }

  //------------------------------------------------------------------------------------------------------------------
  // Fonctions diverses
  //------------------------------------------------------------------------------------------------------------------

  toggleList() {
    const { listDisplayed } = this.state;
    this.setState({ listDisplayed: !listDisplayed });
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { listDisplayed } = this.state;

    return (
      <header>
        <div className="header-section">
          <div className="header-main">
            <a className="header-logo-big" href="/">
              LOGO
            </a>
            <a href="/">PAGE.SERVICES</a>
          </div>
          <nav>
            <a href="/services">PAGE.SERVICES</a>
            <a href="/experiences">PAGE.EXPERIENCES</a>
            <a href="/contact">PAGE.CONTACT</a>
          </nav>
        </div>

        <div className="header-mobile-section">
          <div className="header-main">
            <a className="header-logo" href="/">
              LOGO
            </a>
            <a className="header-list" href="/" onClick={() => this.toggleList()}>
              LIST
            </a>
          </div>
        </div>
        {listDisplayed ? (
          <div className="header-mobile-subsection">
            <nav>
              <a href="/services">PAGE.SERVICES</a>
              <a href="/experiences">PAGE.EXPERIENCES</a>
              <a href="/contact">PAGE.CONTACT</a>
            </nav>
          </div>
        ) : null}
      </header>
    );
  }
}

//------------------------------------------------------------------------------------------------------------------
// Composant lié à Redux
//------------------------------------------------------------------------------------------------------------------

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation
  };
};

export default connect(mapStateToProps, null)(Header);
