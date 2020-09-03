import React from 'react';

import '../styles/Landing.css';
import CardVerticalScroll from '../CardVerticalScroll';

import logo from '../../images/logo.png';
import spot from '../../images/spotPrueba.png'

class Landing extends React.Component {
  render () {
    return <div className="landing">
      <header className='landing__header'>
        <img className='landing__header--img' src={logo} alt="re-z logo"/>
        <a href="">Registrarte</a>
        <a href="">Iniciar Sesión</a>
      </header>
      <div className="landing__spot">
        <img src={spot} alt="spot"/>
      </div>
      <div className="landing__recipes">
        <CardVerticalScroll />
      </div>
    </div>
  }
}

export default Landing