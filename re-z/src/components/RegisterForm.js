import React from 'react';

import './styles/RegisterForm.css';
import Button from './Button';

class RegisterForm extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  }

  render () {
    return (
      <form className='Modal__form' onSubmit={this.handleSubmit}>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Nombre</label>
          <input 
            className='Modal__form--control' 
            onChange={this.handleChange}
            type="text"
            name='name'
            value={this.state.name}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Apellidos</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='lastname'
            value={this.state.lastname}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>e-mail</label>
          <input 
            className='Modal__form--control' 
            onChange={this.handleChange}
            type="email"
            name='email'
            value={this.state.email}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Teléfono (opcional)</label>
          <input 
            className='Modal__form--control' 
            onChange={this.handleChange}
            type="number"
            name='phoneNumber'
            value={this.state.phoneNumber}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Contraseña</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='password'
            value={this.state.password}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Confirmar Contraseña</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='passwordConfirm'
            value={this.state.passwordConfirm}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>País</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='country'
            value={this.state.country}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Ciudad</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='city'
            value={this.state.city}
          />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>Dirección</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='address'
            value={this.state.address}
          />
        </div>
      <Button text='Registrarse' onClick={this.handleClick}/>
    </form>
    )
  }
}

export default RegisterForm;