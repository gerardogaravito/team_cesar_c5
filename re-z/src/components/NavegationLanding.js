import React, { Component } from 'react';

import './styles/NavegationLanding.css';
import './styles/RegisterForm.css'
import CloseIcon from "../images/Atomos/close-icon.svg";
import logo from "../images/logo.png";
import Button from './Button'

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
            <form className='Modal__form'>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Nombre</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='name'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Apellidos</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='lastname'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>e-mail</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='email'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Teléfono (opcional)</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='phoneNumber'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Contraseña</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='password'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Confirmar Contraseña</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='passwordConfirm'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>País</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='country'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Ciudad</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='city'
                />
              </div>
              <div className="Modal__form--group">
                <label className='modal__form--label'>Dirección</label>
                <input 
                  className='Modal__form--control' 
                  type="text"
                  name='address'
                />
              </div>
            <Button text='Registrarse'/>
            </form>
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