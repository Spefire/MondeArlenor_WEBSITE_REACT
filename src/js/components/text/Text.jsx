//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'

class Text extends Component {

    render() {
        const {
            className,
            textContent,
            isBold,
            isItalic,
            fontSize
        } = this.props;

        var divStyle = {
            fontWeight : isBold ? "bold" : "",
            fontStyle : isItalic ? "italic" : "",
            fontSize: fontSize ? fontSize+'px' : '20px',
            lineHeight: fontSize ? fontSize+'px' : '20px'
        };
        
        return (
            <Fragment>
                <div className={className || ''} style={divStyle}>{textContent}</div>
            </Fragment>
        )
    }
}

export default Text;