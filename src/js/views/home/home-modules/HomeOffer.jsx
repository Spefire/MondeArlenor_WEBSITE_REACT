//Imports bibliothèques
import React, { Component, Fragment } from "react";

//Imports des composants
import Text from "../../../components/text/Text.jsx";

//------------------------------------------------------------------------------------------------------------------
// https://projects.invisionapp.com/d/main/default/#/console/15371446/332675598/preview
//------------------------------------------------------------------------------------------------------------------

class HomeOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "HomeOffer"
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

export default HomeOffer;
