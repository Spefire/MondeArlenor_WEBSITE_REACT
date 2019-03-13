//Imports bibliothèques
import React, { Component, Fragment } from "react";

//Imports des composants
import Text from "../../../components/text/Text.jsx";

//Imports des styles
import "./HomeVisit.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class HomeVisit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "HomeVisit"
    };
  }

  render() {
    return (
      <Fragment>
        <Text textContent={this.state.title} fontSize="25" isBold />
      </Fragment>
    );
  }
}

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

export default HomeVisit;
