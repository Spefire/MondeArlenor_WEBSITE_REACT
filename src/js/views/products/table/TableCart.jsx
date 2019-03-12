//Gestion des imports bibliothèques
import React, { Component } from 'react'

//Gestion des imports des composants
import Image from '../../../components/image/Image.jsx'
import RemoveProductButton from '../../../components/buttons/products/RemoveProductButton.jsx'

//Gestion des imports des images
import ValidCartButton from '../../../components/buttons/products/ValidCartButton';

//Déclaration des composants
class TableProducts extends Component {

    render() {
        var total = 0;

        return (
            <table className="productTable productListTable cartTable">
                <thead>
                    <tr>
                        <td className="product-150px-column"></td>
                        <td className="product-dec">
                            <label>Nom</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label>Quantité</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label>Prix</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label>Total</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label></label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(function(object, i){
                            total += (object.quantity * object.price);
                            var content = (                            
                                <tr key={i}>
                                    <td>
                                        <Image className="product-cartimage" src={object.image}/>
                                    </td>
                                    <td className="product-dec">
                                        <span>{object.name}</span>
                                    </td>
                                    <td className="product-center">
                                        <span>{object.quantity}</span>
                                    </td>
                                    <td className="product-center">
                                        <span>{object.price.toFixed(2)} €</span>
                                    </td>
                                    <td className="product-center">
                                        <span>{(object.quantity * object.price).toFixed(2)} €</span>
                                    </td>
                                    <td className="product-center">
                                        <RemoveProductButton product={object} handleCartRemove={this.props.handleCartRemove}/>
                                    </td>
                                </tr>
                            )
                            return content;
                        }, this)
                    }
                    <tr className="cartFinalLine">
                        <td className="cartFinalColumn" colSpan="3"></td>
                        <td className="cartFinalColumn product-center">
                            <span>Total final</span>
                        </td>
                        <td className="product-center">
                            <span>{total.toFixed(2)} €</span>
                        </td>
                        <td className="product-center">
                            {
                                (this.props.cart.length > 0 && (this.props.sold - total).toFixed(2) > 0) ? (
                                    <ValidCartButton total={total} handleCartReset={this.props.handleCartReset}/>
                                ):(null)
                            }
                        </td>
                    </tr>
                    <tr className="cartFinalLine">
                        <td className="cartFinalColumn" colSpan="3"></td>
                        <td className="cartFinalColumn product-center">
                            <span>Solde restant</span>
                        </td>
                        <td className="product-center">
                            {
                                ((this.props.sold - total).toFixed(2) > 0) ? (
                                    <span>{(this.props.sold - total).toFixed(2)} €</span>
                                ) : (
                                    <span className="cartSoldAlert">{(this.props.sold - total).toFixed(2)} €</span>
                                )
                            }
                        </td>
                        <td className="product-center"></td>
                    </tr>
                </tbody>                     
            </table>
        )
    }
}

export default TableProducts;