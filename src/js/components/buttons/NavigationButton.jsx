//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

//Gestion des imports des composants
import Image from '../image/Image.jsx'

//Gestion des styles
import './NavigationButton.css'

class NavigationButton extends Component {

    render() {
        const {
            imgSrc,
            imgSrcActivated,
            textContent,
            link,
            isActivated
        } = this.props;

        return (
            <Fragment>
                <Link to={link} style={{textDecoration: 'none'}}>
                    {
                        (isActivated) ? (
                            <div className={"navButton navButtonSelected"}>
                                <Image className="navImage" src={imgSrcActivated}/>
                                <span>{textContent}</span>
                            </div>
                        ) : (
                            <div className={"navButton"}>
                                <Image className="navImage" src={imgSrc}/>
                                <span>{textContent}</span>
                            </div>
                        )
                    }
                </Link>
            </Fragment>
        )
    }
}

export default NavigationButton;