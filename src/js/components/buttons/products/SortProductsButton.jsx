//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import Image from '../../image/Image.jsx'

//Gestion des imports des images
import imgSortAscSrc from'../../../../assets/icons/sortAsc.png'
import imgSortDescSrc from'../../../../assets/icons/sortDesc.png'

//Gestion du redux
import { connect } from 'react-redux'
import { changeProductsSortMode } from '../../../redux/actions.js'

//Gestion des styles
import './SortProductsButton.css'

class SortProductsButton extends Component {

    render() {
        return (
            <Fragment>
                {
                    (this.props.currentProductsSortMode === "ASC") ? (
                        <button className="sortProductsButton" onClick={(event) => this.props.changeProductsSortMode("DESC")}>
                            <Image className="sortProductsImage" src={imgSortAscSrc}/>
                        </button>
                    ):(null)
                }
                {
                    (this.props.currentProductsSortMode === "DESC") ? (
                        <button className="sortProductsButton" onClick={(event) => this.props.changeProductsSortMode("ASC")}>
                            <Image className="sortProductsImage" src={imgSortDescSrc}/>
                        </button>
                    ):(null)
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentProductsSortMode : state.currentProductsSortMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeProductsSortMode : productsSortMode => dispatch(changeProductsSortMode(productsSortMode))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortProductsButton)