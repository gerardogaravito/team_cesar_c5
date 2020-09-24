import React from 'react';

import './styles/RecipeCardHorizontalDerecha.css';

import timeIcon from '../images/Atomos/time-icon.svg';
import fotoComida2 from '../images/fotoComida2.png';

function RecipeCardHorizontalDerecha(props) {

  return (
  <button className='cardright'>
    <div className='cardright__info'>
      <div className='cardright__info--title'>{props.data.name}</div>
      <div className='cardright__info--text'>{props.data.instructions}</div>
    </div>
    <div className='cardright__time'>
      <img src={timeIcon} alt="tiempo de preparación"/>
      <div className='cardright__time--text'>{props.data.preparationTime} min</div>
    </div>
      <img className='cardright__image' src={props.data.picture} alt="foto de comida"/>
  </button>
  )
}

export default RecipeCardHorizontalDerecha