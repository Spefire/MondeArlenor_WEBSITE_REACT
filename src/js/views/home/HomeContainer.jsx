//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

//Gestion des imports des composants
import Text from '../../components/text/Text.jsx'
import Space from '../../components/Space.jsx'

//Gestion du redux
import { connect } from 'react-redux'
import { changeLocation } from '../../redux/actions.js';

//Gestion des styles
import './HomeContainer.css'

//Déclaration du composant principal
class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions : []
        }

        var currentLocation = this.props.location.pathname;
        this.props.changeLocation(currentLocation);
    }

    //------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------

    render() {
        //const questions = this.state.questions;
        return (
            <Fragment>
                <Text textContent="ACCUEIL" fontSize="25" isBold/>
                <Space height="20"/>
                <div className="sub-section-row">
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLocation: location => dispatch(changeLocation(location))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(HomeContainer)