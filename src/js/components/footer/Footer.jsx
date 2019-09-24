//Import des bibliothèques
import React, { Component } from "react";

//Import du redux
import { connect } from "react-redux";

//Import des styles
import "./Footer.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Footer"
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { currentLocation } = this.props;
    const { title } = this.state;

    return (
      <footer>{title} : {currentLocation}</footer>
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
)(Footer);
