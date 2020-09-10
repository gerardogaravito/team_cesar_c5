import React from 'react';

import './styles/RegisterForm.css';
import Button from './Button';

class LoginForm extends React.Component {
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
      <React.Fragment> 
      <form className='Modal__form' onSubmit={this.handleSubmit}>
        <div className="Modal__form--group">
          <label className='modal__form--label'>e-mail</label>
          <input 
            className='Modal__form--control' 
            onChange={this.handleChange}
            type="text"
            name='email'
            value={this.state.name}
            />
        </div>
        <div className="Modal__form--group">
          <label className='modal__form--label'>contraseña</label>
          <input 
            className='Modal__form--control'
            onChange={this.handleChange}
            type="text"
            name='password'
            value={this.state.lastname}
            />
        </div>
      <Button text='Iniciar Sesión' onClick={this.handleClick}/>
      <a className='Modal__form--forgot' href="">Olvidé mi contraseña</a>
      </form>
      </React.Fragment>
    )
  }
}

export default LoginForm;