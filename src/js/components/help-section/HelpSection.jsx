//Gestion des imports bibliothèques
import React, { Component } from "react";

//Gestion des styles
import "./HelpSection.scss";

class HelpSection extends Component {

  seeProjectSteps = () => {
    console.log("SEE PROJECT STEPS");
  }

  render() {
    return (
      <div className="section">
        <button onClick={this.seeProjectSteps}>Voir les étapes de votre projet</button>
        <h4>Une question ? Posez-la directement à l'un de nos experts en ligne.</h4>
        <div className="help-point">
          <div className="point">?</div>
          <span>Vous souhaitez réserver une visite ?</span>
        </div>
        <div className="help-point">
          <div className="point">?</div>
          <span>Vous souhaitez faire une offre sur un bien ?</span>
        </div>
        <div className="help-point">
          <div className="point">?</div>
          <span>Vous souhaitez télécharger des documents supplémentaires ?</span>
        </div>
      </div>
    );
  }
}

export default HelpSection;
