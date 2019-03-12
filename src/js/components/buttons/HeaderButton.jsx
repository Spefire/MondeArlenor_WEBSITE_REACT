//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//Gestion des styles
import "./HeaderButton.scss";

class HeaderButton extends Component {
  render() {
    const { isActivated, link, textContent } = this.props;

    return (
      <Fragment>
        <Link to={link} style={{ textDecoration: "none" }}>
          {isActivated ? (
            <span className={"navButton navButtonSelected"}>{textContent}</span>
          ) : (
            <span className={"navButton"}>{textContent}</span>
          )}
        </Link>
      </Fragment>
    );
  }
}

export default HeaderButton;
