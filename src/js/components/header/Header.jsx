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
      title: "Header"
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { currentLocation } = this.props;
    const { title } = this.state;

    return (
      <header>{title} : {currentLocation}</header>
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

export default connect(
  mapStateToProps,
  null
)(Header);
