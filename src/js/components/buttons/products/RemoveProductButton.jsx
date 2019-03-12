//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import Image from '../../image/Image.jsx'

//Gestion des imports des images
import imgTrashSrc from'../../../../assets/icons/trash.png';

//Gestion des styles
import './RemoveProductButton.css'

class RemoveProductButton extends Component {

    render() {

        return (
            <Fragment>
                <button className="removeProductButton"
                onClick={(event) => {
                    this.props.handleCartRemove(this.props.product);
                    }}>
                    <Image className="removeProductImage" src={imgTrashSrc}/>
                    <span className="removeProductText">Enlever</span>
                </button>
            </Fragment>
        )
    }
}

export default RemoveProductButton;