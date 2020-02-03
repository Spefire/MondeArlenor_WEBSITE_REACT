//Import des bibliothèques
import React, { Component } from "react";

//Import de redux
import { connect } from "react-redux";
import { changeLocation } from "../../redux/actions.js";

//Import des styles
import "./HomeContainer.scss";

//------------------------------------------------------------------------------------------------------------------
// Page Home
//------------------------------------------------------------------------------------------------------------------

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Le Monde d'Arlénor"
    };

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { title } = this.state;

    return <div>{title}</div>;
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

export default connect(null, mapDispatchToProps)(HomeContainer);
