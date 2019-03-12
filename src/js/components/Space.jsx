//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

class Space extends Component {

    render() {
        const {
            className,
            height,
            width
        } = this.props;

        var divStyle = {
            height : height ? height+'px' : '0px',
            width : width ? width+'px' : '0px'
        };
        
        return (
            <Fragment>
                <div className={className || ''} style={divStyle}></div>
            </Fragment>
        )
    }
}

export default Space;