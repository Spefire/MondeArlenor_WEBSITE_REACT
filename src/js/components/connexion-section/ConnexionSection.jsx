//Gestion des imports bibliothèques
import React, { Component } from "react";

//Gestion des imports des images
import videoLoginSrc from'../../../assets/videos/video01.webm'

//Gestion des styles
import "./ConnexionSection.scss";

class ConnexionSection extends Component {

  render() {
    return (
      <div className="section">
        <div className="connexion-title left">
          <h2>Pourquoi<br></br>créer un compte ?</h2>
        </div>
        <div className="connexion-point">
          <div className="point">1</div>
          <span>Accéder à des annonces immobilières qui vous disent enfin tout (photos supplémentaires , plans 3D, diagnostics, etc.)</span>
        </div>
        <div className="connexion-point">
          <div className="point">2</div>
          <span>Organiser vos visites en ligne en quelques clics et visiter des logements en toute autonomie, avec un agent à distance</span>
        </div>
        <div className="connexion-point">
          <div className="point">3</div>
          <span>Profiter de l’accompagnement gratuit d’un expert à chaque étape de votre projet</span>
        </div>
        <div className="connexion-point">
          <div className="point">4</div>
          <span>Bénéficier de services rigoureusement sélectionnés par Monemprunt.com pour me financer, faire réaliser des travaux, organiser mon déménagement et mes changements d’adresses, etc.</span>
        </div>
        <video controls width="250">
          <source src={videoLoginSrc} type="video/webm"/>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }
}

export default ConnexionSection;
