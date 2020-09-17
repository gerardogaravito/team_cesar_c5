import React from 'react';

import './styles/RecipeCardHorizontalDerecha.css';

import timeIcon from '../images/Atomos/time-icon.svg';
import fotoComida2 from '../images/fotoComida2.png';

function RecipeCardHorizontalDerecha(props) {

  return (
  <button className='cardright'>
    <div className='cardright__info'>
      <div className='cardright__info--title'>{props.data.name}</div>
      <div className='cardright__info--text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium pariatur quia reprehenderit, distinctio quidem aut sed officia? Omnis qui voluptates eaque quia sequi? Quasi sit molestias minima nihil autem repellat.</div>
    </div>
    <div className='cardright__time'>
      <img src={timeIcon} alt="tiempo de preparación"/>
      <div className='cardright__time--text'>70 min</div>
    </div>
    <div className='cardright_image'>
      <img src={fotoComida2} alt="foto de comida"/>
    </div>
  </button>
  )
}

export default RecipeCardHorizontalDerecha