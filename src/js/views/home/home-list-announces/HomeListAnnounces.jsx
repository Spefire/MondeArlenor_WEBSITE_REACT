//Imports bibliothèques
import React, { Component, Fragment } from "react";

//Imports des composants
import Text from "../../../components/text/Text.jsx";

//Imports des styles
import "./HomeListAnnounces.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class HomeListAnnounces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "HomeListAnnounces"
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

export default HomeListAnnounces;
