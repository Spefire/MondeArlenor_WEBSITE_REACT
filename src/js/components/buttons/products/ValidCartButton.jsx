//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import Image from '../../image/Image.jsx'

//Gestion des imports des images
import imgPaySrc from'../../../../assets/icons/pay.png';

//Gestion des styles
import './ValidCartButton.css'

class ValidCartButton extends Component {

    render() {

        return (
            <Fragment>
                <button className="validCartButton"
                onClick={(event) => {
                    this.props.handleCartReset(this.props.total);
                    }}>
                    <Image className="validCartImage" src={imgPaySrc}/>
                    <span className="validCartText">PAYER</span>
                </button>
            </Fragment>
        )
    }
}

export default ValidCartButton;