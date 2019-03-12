//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import Image from '../../image/Image.jsx'

//Gestion des imports des images
import imgBuySrc from'../../../../assets/icons/buy.png';

//Gestion des styles
import './AddProductButton.css'

class AddProductButton extends Component {

    render() {

        return (
            <Fragment>
                <button className="addProductButton"
                onClick={(event) => {
                    this.props.handleCartAdd(this.props.product);
                    }}>
                    <Image className="addProductImage" src={imgBuySrc}/>
                    <span className="addProductText">Acheter</span>
                </button>
            </Fragment>
        )
    }
}

export default AddProductButton;