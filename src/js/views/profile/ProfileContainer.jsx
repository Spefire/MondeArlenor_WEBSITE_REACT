//Imports bibliothèques
import React, { Component, Fragment } from "react";

//Imports des composants
import Text from "../../components/text/Text.jsx";

//Imports de redux
import { connect } from "react-redux";
import { changeLocation } from "../../redux/actions.js";

//Imports des styles
import "./ProfileContainer.scss";

//------------------------------------------------------------------------------------------------------------------
// https://projects.invisionapp.com/d/main/default/#/console/15371446/335515158/preview
//------------------------------------------------------------------------------------------------------------------

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  render() {
    return (
      <Fragment>
        <Text textContent={this.props.location.pathname} fontSize="25" isBold />
      </Fragment>
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
)(ProfileContainer);