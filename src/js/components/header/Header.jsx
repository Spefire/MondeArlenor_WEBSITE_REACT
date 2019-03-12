//Gestion des imports bibliothèques
import React, { Component } from 'react'

//Gestion des imports des composants
import Image from '../image/Image.jsx'
import Text from '../text/Text.jsx'

//Gestion des imports des images
import imgLogoSrc from'../../../assets/images/logo.png';

//Gestion du redux
import { connect } from 'react-redux'

//Gestion des styles
import './Header.css'

class Header extends Component {

    render() {

        return (
            <header>
                <Image alt="Medipep" className="headerImage" src={imgLogoSrc}/>
                <Text textContent={this.props.user.firstName + " " + this.props.user.lastName.toUpperCase()} isBold/>
            </header>
        )
    }
}

export default connect()(Header)