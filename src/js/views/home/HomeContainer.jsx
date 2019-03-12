//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";

//Gestion des imports des composants
import Text from "../../components/text/Text.jsx";

//Gestion du redux
import { connect } from "react-redux";
import { changeLocation } from "../../redux/actions.js";

//Gestion des styles
import "./HomeContainer.css";

//Déclaration du composant principal
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    };

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  render() {
    return (
      <Fragment>
        <Text textContent={this.props.location.pathname} fontSize="25" isBold />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
