//Gestion des imports bibliothèques
import React, { Component, Fragment } from "react";

class Text extends Component {
  render() {
    const { className, fontSize, isBold, isItalic, textContent } = this.props;

    var divStyle = {
      fontSize: fontSize ? fontSize + "px" : "20px",
      fontStyle: isItalic ? "italic" : "",
      fontWeight: isBold ? "bold" : "",
      lineHeight: fontSize ? fontSize + "px" : "20px"
    };

    return (
      <Fragment>
        <div className={className || ""} style={divStyle}>
          {textContent}
        </div>
      </Fragment>
    );
  }
}

export default Text;
