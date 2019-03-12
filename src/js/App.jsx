//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

//Gestion des imports des composants
import Header from './components/header/Header.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import HomeContainer from './views/home/HomeContainer.jsx'
import ProductsContainer from './views/products/ProductsContainer.jsx'

//Gestion des styles
import '../style/index.css'

//Déclaration du composant principal
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {
                firstName: "Nicholas",
                lastName: "BRUN"
            }
        }
    }
  
    render() {
        return (
            <Fragment>
                <div>
                    <div className="section-left">
                        <Header user={this.state.user}/>
                        <Navigation/>
                    </div>
                    <div className="section-right">
                        <main>
                            <Switch>
                                <Route exact path='/' component={HomeContainer}/>
                                <Route path='/products' component={ProductsContainer}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;