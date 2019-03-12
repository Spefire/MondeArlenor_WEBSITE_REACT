//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import TableCart from './table/TableCart.jsx'
import TableProducts from './table/TableProducts.jsx'
import Text from '../../components/text/Text.jsx'
import Space from '../../components/Space.jsx'

//Gestion des imports des images
import imgSummerSrc from'../../../assets/images/summer.jpg'
import imgWinterSrc from'../../../assets/images/winter.jpg'
import imgAutumnSrc from'../../../assets/images/autumn.jpg'
import imgSpringSrc from'../../../assets/images/spring.jpg'

//Gestion du redux
import { connect } from 'react-redux'
import { changeLocation } from '../../redux/actions.js';

//Gestion des styles
import './ProductsContainer.css'
import SeeProductsButton from '../../components/buttons/products/SeeProductsButton';

//Déclaration du composant principal
class ProductsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sold : 20,
            cart : [],
            products : [
                {
                    id: 1,
                    name: "La Danse de l'Ete",
                    description: "Dessin d'une série de 4",
                    image: imgSummerSrc,
                    height: 20,
                    width: 20,
                    quantity: 3,
                    price: 5.05,
                    view: 2
                },
                {
                    id: 2,
                    name: "La Danse de l'Hiver",
                    description: "Dessin d'une série de 4",
                    image: imgWinterSrc,
                    height: 20,
                    width: 20,
                    quantity: 4,
                    price: 4.55,
                    view: 1
                },
                {
                    id: 3,
                    name: "La Danse de l'Automne",
                    description: "Dessin d'une série de 4",
                    image: imgAutumnSrc,
                    height: 20,
                    width: 20,
                    quantity: 1,
                    price: 6.05,
                    view: 2
                },
                {
                    id: 4,
                    name: "La Danse du Printemps",
                    description: "Dessin d'une série de 4",
                    image: imgSpringSrc,
                    height: 20,
                    width: 20,
                    quantity: 2,
                    price: 3.50,
                    view: 0
                }
            ]
        }

        var currentLocation = this.props.location.pathname;
        this.props.changeLocation(currentLocation);

        this.handleCartAdd = this.handleCartAdd.bind(this);
        this.handleCartReset = this.handleCartReset.bind(this);
        this.handleCartRemove = this.handleCartRemove.bind(this);
    }

    handleCartAdd = (value) => {
        console.log("handleCartAdd() : ", value);

        let isNew = true;
        let newCart = this.state.cart.slice();
        newCart.forEach(element => {
            if (element.id === value.id) {
                isNew = false;
                element.quantity += 1;
            }
        });
        if (isNew) {
            let newProduct = Object.assign({}, value);
            newProduct.quantity = 1;
            newCart.push(newProduct);
        }

        let newProducts = this.state.products.slice();
        newProducts.forEach(element => {
            if (element.id === value.id) {
                element.quantity -= 1;
            }
        });

        this.setState(function(prevState, props) {
            return {
                ...prevState,
                cart : newCart
            }
        })
    }

    handleCartReset = (price) => {
        console.log("handleCartReset()");
        this.setState(function(prevState, props) {
            return {
                ...prevState,
                sold : prevState.sold - price,
                cart : []
            }
        })
    }

    handleCartRemove = (value) => {
        console.log("handleCartRemove() : ", value);

        let newCart = [];
        this.state.cart.forEach(element => {
            if (element.id === value.id) {
                element.quantity -= 1;
                if (element.quantity > 0) newCart.push(element);
            } else {
                newCart.push(element);
            }
        });

        let newProducts = this.state.products.slice();
        newProducts.forEach(element => {
            if (element.id === value.id) {
                element.quantity += 1;
            }
        });

        this.setState(function(prevState, props) {
            return {
                ...prevState,
                cart : newCart
            }
        })
    }

    //------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------

    render() {
        const {
            sold,
            cart,
            products
        }= this.state;
        
        return (
            <Fragment>
                <Text textContent="LISTE DES PRODUITS" fontSize="25" isBold/>
                <Space height="20"/>
                <div className="productHeader">
                    <SeeProductsButton cart={cart}/>
                    <Text className="productSolde" textContent={"Solde : "+sold.toFixed(2)+" €"} fontSize="20" isBold/>
                </div>
                {
                    (this.props.currentSeeCartMode) ? (
                        <Fragment>
                            <Space height="20"/>
                            <div className="sub-section-row">
                                <TableCart
                                sold={sold}
                                cart={cart}
                                handleCartReset={this.handleCartReset}
                                handleCartRemove={this.handleCartRemove}/>
                            </div>
                        </Fragment>
                    ):(null)
                }
                <Space height="40"/>
                <div className="sub-section-row">
                    <TableProducts
                    products={products}
                    handleCartAdd={this.handleCartAdd}/>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentProductsSortMode : state.currentProductsSortMode,
        currentSeeCartMode : state.currentSeeCartMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLocation: location => dispatch(changeLocation(location))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)