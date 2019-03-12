//Gestion des imports bibliothèques
import React, { Component } from 'react'

//Gestion des imports des composants
import Image from '../../../components/image/Image.jsx'
import AddProductButton from '../../../components/buttons/products/AddProductButton.jsx'
import SortProductsButton from '../../../components/buttons/products/SortProductsButton.jsx'

//Gestion des imports des images
import imgViewVeryGoodSrc from'../../../../assets/icons/viewVeryGood.png'
import imgViewMiddleGoodSrc from'../../../../assets/icons/viewMiddleGood.png'
import imgViewNotGoodSrc from'../../../../assets/icons/viewNotGood.png'

//Déclaration des composants
class TableProducts extends Component {

    render() {

        return (
            <table className="productTable productListTable">
                <thead>
                    <tr>
                        <td className="product-100px-column"></td>
                        <td className="product-dec">
                            <label>Nom</label>
                            <SortProductsButton/>
                        </td>
                        <td className="product-15-column product-dec">
                            <label>Description</label>
                        </td>
                        <td className="product-5-column product-center">
                            <label>H</label>
                        </td>
                        <td className="product-5-column product-center">
                            <label>L</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label>Quantité</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label>Prix</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label>Avis</label>
                        </td>
                        <td className="product-9-column product-center">
                            <label></label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(function(object, i){

                            var content = (                            
                                <tr key={i} className={(object.quantity === 0) ? "productAlert" : ""}>
                                    <td>
                                        <Image className="product-image" src={object.image}/>
                                    </td>
                                    <td className="product-dec">
                                        <span>{object.name}</span>
                                    </td>
                                    <td className="product-dec">
                                        <span>{object.description}</span>
                                    </td>
                                    <td className="product-center">
                                        <span>{object.height} cm</span>
                                    </td>
                                    <td className="product-center">
                                        <span>{object.width} cm</span>
                                    </td>
                                    <td className="product-center">
                                        {
                                            (object.quantity === 0) ? (
                                                <span className="product-alert">0</span>
                                            ) : (<span>{object.quantity}</span>)
                                        }
                                    </td>
                                    <td className="product-center">
                                        <span>{object.price.toFixed(2)} €</span>
                                    </td>
                                    <td>
                                        {
                                            (object.view === 2) ? (
                                                <Image className="product-view" src={imgViewVeryGoodSrc}/>
                                            ):(null)
                                        }
                                        {
                                            (object.view === 1) ? (
                                                <Image className="product-view" src={imgViewMiddleGoodSrc}/>
                                            ):(null)
                                        }
                                        {
                                            (object.view === 0) ? (
                                                <Image className="product-view" src={imgViewNotGoodSrc}/>
                                            ):(null)
                                        }
                                    </td>
                                    <td className="product-center">
                                        {
                                            (object.quantity > 0) ? (
                                                <AddProductButton product={object} handleCartAdd={this.props.handleCartAdd}/>
                                            ) : (null)
                                        }
                                    </td>
                                </tr>
                            )
                            return content;
                        }, this)
                    }
                </tbody>                     
            </table>
        )
    }
}

export default TableProducts;