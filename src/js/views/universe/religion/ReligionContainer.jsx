//Import des bibliothèques
import React, { Component } from "react";

//Import de redux
import { connect } from "react-redux";
import { changeLocation } from "../../../redux/actions.js";

//Import des styles
import "./ReligionContainer.scss";

//------------------------------------------------------------------------------------------------------------------
// Page Religion
//------------------------------------------------------------------------------------------------------------------

class ReligionContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "La Religion"
    }

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { title } = this.state;

    return (
      <div>{title}</div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// Composant lié à Redux
//------------------------------------------------------------------------------------------------------------------

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReligionContainer);
