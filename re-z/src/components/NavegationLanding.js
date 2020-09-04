import React, { Component } from 'react';

import './styles/NavegationLanding.css';
import CloseIcon from "../images/Atomos/close-icon.svg";
import Searchicon from "../images/Atomos/search-icon.svg";

class ModalLogin extends Component{
    render(){
        return(
          <div className="Modal">
            <div className="Modal__container">
            <img src={CloseIcon} alt="Close" onClick={this.props.onCloseLogin}/> 
            <h1>Login</h1>
        </div> 
        </div>
        )
    }
}
class ModalRegister extends Component{
  render(){
      return(
        <div className="Modal">
          <div className="Modal__container">
          <img src={CloseIcon} alt="Close" onClick={this.props.onCloseRegister}/> 
          <h1>Registro</h1>
      </div> 
      </div>
      )
  }
}
 class NavegationLanding extends React.Component {
    state = {isModalLoginOpen: false}
    state = {isModalregisterOpen: false}

    _openLoginModal = () => this.setState({ isModalLoginOpen:true })
    _closeLoginModal = () => this.setState({ isModalLoginOpen:false })

    _openLoginRegister = () => this.setState({ isModalregisterOpen:true })
    _closeLoginRegister = () => this.setState({ isModalregisterOpen:false })

    render() {
      return (
        <div className="LandingMenu">
          <button onClick={this._openLoginRegister}>Regístrate</button>
          {this.state.isModalregisterOpen &&
                  <ModalRegister onCloseRegister={this._closeLoginRegister}/> 
              }
          <button name="boton de login" onClick={this._openLoginModal}>
            Iniciar Sesión
            </button>
              {this.state.isModalLoginOpen &&
                  <ModalLogin onCloseLogin={this._closeLoginModal}/> 
              }
        </div>
      );
    }
  }

  export default NavegationLanding;