//Import des bibliothèques
import React, { Component } from "react";
import classnames from "classnames";
import { isFunction } from "util";

//Import des styles
import "./Modal.scss";

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

class Modal extends Component {

  constructor() {
    super();
    
    this.state = {
      visible: false,
      rendered: false
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);

    if (this.props.open) {
      this.openModal();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
    document.body.style.overflow = 'auto';
  }

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      if (this.props.open) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Fonctions diverses : Vérifications, traitement et utilisations de requêtes
  //------------------------------------------------------------------------------------------------------------------

  handleKeyPress = (event) => {
    if (event.keyCode === 27 && this.state.visible) {
      if (isFunction(this.props.onClose)) this.props.onClose();
    }
  }

  openModal() {
    document.body.style.overflow = 'hidden';
    this.setState({rendered: true});

    setTimeout(() => {
      this.setState({visible: true});

      if (typeof this.props.afterOpen === 'function') {
        this.props.afterOpen();
      }
    });
  }

  closeModal() {
    this.setState({visible: false});
    document.body.style.overflow = 'auto';

    setTimeout(() => {
      this.setState({rendered: false});
    }, 300);
  }

  getStyles() {
    const { topOffset } = this.props;

    if (this.modalContent && topOffset) {
      const bounds = this.modalContent.getBoundingClientRect();
      const adjustedTopOffset = topOffset - bounds.top - (bounds.height / 2);

      return {
        transform: `translateY(${adjustedTopOffset}px)`
      }
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Rendu principal, appelé en premier
  //------------------------------------------------------------------------------------------------------------------

  render() {
    const { rendered, visible } = this.state;
    const { actions, content, centered, cover, lightbox, title, showSidebar, onClose, className } = this.props;

    const modalClasses = classnames('modal-container', {
      visible: visible,
      'center-content': centered || lightbox,
      lightbox: lightbox,
      cover: cover || lightbox
    });

    if (rendered) {
      return (
        <div className={modalClasses + ' ' + className}>
          <div className="container">
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-content-wrapper" ref={ref => (this.modalContent = ref)} style={this.getStyles()}>
              <div className={'modal' + (lightbox ? '' : ' card')}>

                <div className="modal-content">
                  {title ? (
                    <div className="modal-title">
                      <h2>{title}</h2>
                    </div>
                  ) : null}
                  {content ? content : null}
                </div>

                { actions ? (
                  <div className="modal-actions">
                    {actions}
                  </div>
                ) : null}
              </div>
            </div>
            { showSidebar ? <div className="sidebar"></div> : null }
          </div>
        </div>
      )
    }
    return null;
  }
}

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

export default Modal;
