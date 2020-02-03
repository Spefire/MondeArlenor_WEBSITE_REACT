//Import des bibliothèques
import React, { Component, Fragment } from "react";

//Import du redux
import { connect } from "react-redux";

//Import des styles
import "./Footer.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Footer"
    };
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { currentLocation } = this.props;

    var bigfooter = true;
    var route = currentLocation.split("/")[1];
    if (!route) bigfooter = false;

    return (
      <Fragment>
        {bigfooter ? (
          <footer>
            <div className="bigfooter-infos">
              <div className="bigfooter-left">
                <img src="/assets/images/logo.png" alt="" />
              </div>
              <div className="bigfooter-center">
                <p>FOOTER.RESUME</p>
                <span routerlink="about">
                  <i className="fas fa-chevron-right"></i>FOOTER.SEEMORE
                </span>
              </div>
              <div className="bigfooter-right">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/spefire" target="_blank" rel="noopener noreferrer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/spefire" target="_blank" rel="noopener noreferrer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/spefireflies" target="_blank" rel="noopener noreferrer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bigfooter-navigation">
              <nav>
                <a href="/legacy">PAGE.LEGACY</a>
                <a href="/about">PAGE.ABOUT</a>
              </nav>
            </div>
          </footer>
        ) : (
          <footer>
            <div className="footer-navigation">
              <nav>
                <a href="/legacy">PAGE.LEGACY</a>
                <a href="/about">PAGE.ABOUT</a>
              </nav>
              <div className="footer-section">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/spefire" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/spefire" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/spefireflies" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <div className="footer-arenart" routerLink="arenart"></div>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        )}
      </Fragment>
    );
  }
}

//------------------------------------------------------------------------------------------------------------------
// Composant lié à Redux
//------------------------------------------------------------------------------------------------------------------

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation
  };
};

export default connect(mapStateToProps, null)(Footer);
