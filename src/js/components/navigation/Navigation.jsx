//Gestion des imports bibliothèques
import React, { Component } from 'react'

//Gestion des imports des composants
import NavigationButton from '../buttons/NavigationButton.jsx'

//Gestion des imports des images
import imgHomeSrc from'../../../assets/icons_svg/home.svg';
import imgProductsSrc from'../../../assets/icons_svg/products.svg';
import imgHomeActivatedSrc from'../../../assets/icons_svg/homeActivated.svg';
import imgProductsActivatedSrc from'../../../assets/icons_svg/productsActivated.svg';

//Gestion du redux
import { connect } from 'react-redux'

//Gestion des styles
import './Navigation.css'

class Navigation extends Component {

    render() {
        const currentLocation = this.props.currentLocation;

        return (
            <nav>
                <NavigationButton
                    isActivated={currentLocation === "/"}
                    imgSrc={imgHomeSrc}
                    imgSrcActivated={imgHomeActivatedSrc}
                    textContent="Accueil"
                    link="/"/>
                <NavigationButton
                    isActivated={currentLocation === "/products"}
                    imgSrc={imgProductsSrc}
                    imgSrcActivated={imgProductsActivatedSrc}
                    textContent="Produits"
                    link="/products"/>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentLocation: state.currentLocation
    };
};

export default connect(
    mapStateToProps
)(Navigation)