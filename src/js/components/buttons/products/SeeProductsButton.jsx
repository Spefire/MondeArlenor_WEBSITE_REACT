//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import Image from '../../image/Image.jsx'

//Gestion des imports des images
import imgCartSrc from'../../../../assets/icons/cart.png'

//Gestion du redux
import { connect } from 'react-redux'
import { seeCartMode } from '../../../redux/actions.js';

//Gestion des styles
import './SeeProductsButton.css'

class SeeProductsButton extends Component {

    render() {
        var total = 0;
        this.props.cart.forEach(element => {
            total += element.quantity;
        });
        return (
            <Fragment>
                {
                    (!this.props.currentSeeCartMode) ? (
                        <button className="seeProductsButton" onClick={(event) => {this.props.seeCartMode(true);}}>
                            <Image className="seeProductsImage" src={imgCartSrc}/>
                            <span className="seeProductsText">Voir le panier ({total})</span>
                        </button>
                    ):(
                        <button className="seeProductsButton disabled" onClick={(event) => {this.props.seeCartMode(false);}}>
                            <Image className="seeProductsImage" src={imgCartSrc}/>
                            <span className="seeProductsText">Fermer le panier</span>
                        </button>
                    )
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSeeCartMode : state.currentSeeCartMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        seeCartMode: cartMode => dispatch(seeCartMode(cartMode))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeeProductsButton)