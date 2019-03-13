//Imports bibliothèques
import React, { Component, Fragment } from "react";

//Imports des composants
import Text from "../../components/text/Text.jsx";
import HomeVisit from './home-visit/HomeVisit';
import HomeSingleAnnounce from './home-single-announce/HomeSingleAnnounce';
import HomeParcours from './home-parcours/HomeParcours';
import HomeOffer from './home-offer/HomeOffer';
import HomeListAnnounces from "./home-list-announces/HomeListAnnounces.jsx";

//Imports de redux
import { connect } from "react-redux";
import { changeLocation } from "../../redux/actions.js";

//Imports des styles
import "./HomeContainer.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "LIST"
    };

    var currentLocation = this.props.location.pathname;
    this.props.changeLocation(currentLocation);
  }

  render() {
    const { mode } = this.state;
    return (
      <Fragment>
        <Text textContent={this.props.location.pathname} fontSize="25" isBold />
        {
          (mode === "LIST") ? (
            <HomeListAnnounces/>
          ) : (null)
        }
        {
          (mode === "OFFER") ? (
            <HomeOffer/>
          ) : (null)
        }
        {
          (mode === "PARCOURS") ? (
            <HomeParcours/>
          ) : (null)
        }
        {
          (mode === "SINGLE") ? (
            <HomeSingleAnnounce/>
          ) : (null)
        }
        {
          (mode === "VISIT") ? (
            <HomeVisit/>
          ) : (null)
        }
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
)(HomeContainer);
