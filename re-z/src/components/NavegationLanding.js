import React, { Component } from 'react';

import './styles/NavegationLanding.css';
import './styles/RegisterForm.css'
import CloseIcon from "../images/Atomos/close-icon.svg";
import logo from "../images/logo.png";
import Button from './Button'
import RegisterForm from './RegisterForm';


class ModalLogin extends Component{
    render(){
        return(
          <div className="Modal">
            <div className="Modal__container-Login">
                <div className="styles-logo">
                  <img src={logo} alt="Logo"/> 
                </div>
                <div className="close-button">
                  <img src={CloseIcon} alt="Close" onClick={this.props.onCloseLogin}/> 
                </div>
            </div> 
        </div>
        )
    }
}
class ModalRegister extends Component{
  render(){
      return(
        <div className="Modal">
          <div className="Modal__container-Register">
            <div className="styles-logo">
              <img src={logo} alt="Logo"/> 
            </div>
            <div className="close-button">
              <img src={CloseIcon} alt="Close" onClick={this.props.onCloseRegister}/> 
            </div>
            <RegisterForm />
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
          <button className="LandingMenu__button" onClick={this._openLoginRegister}>Regístrate</button>
          {this.state.isModalregisterOpen &&
                  <ModalRegister onCloseRegister={this._closeLoginRegister}/> 
              }
          <button className="LandingMenu__button" name="boton de login" onClick={this._openLoginModal}>
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