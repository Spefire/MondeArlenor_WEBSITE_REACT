//Gestion des imports bibliothèques
import React, { Component, Fragment } from 'react'
import { isNil } from 'lodash'

//Gestion des styles
import './Image.css'

class Image extends Component {

    render() {
        const {
            alt,
            className,
            height,
            src
        } = this.props;

        return (
            <Fragment>
                {
                    (!isNil(src)) ? (
                        <img
                            alt={alt}
                            className={className || ''}
                            height={height || 'auto'}
                            src={src}
                        />
                    ) : (null)
                }
            </Fragment>
        )
    }
}

export default Image;