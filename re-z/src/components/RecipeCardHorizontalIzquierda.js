import React from 'react';

import './styles/RecipeCardHorizontalIzquierda.css'
import timeIcon from '../images/Atomos/time-icon.svg'
import fotoComida2 from '../images/fotoComida4.png'

function RecipeCardHorizontalIzquierda (props) {

  return (
    <button className='cardleft'>
      <div className='cardleft__info'>
        <div className='cardleft__info--title'>{props.data.name}</div>
        <div className='cardleft__info--text'>{props.data.instructions}</div>
      </div>
      <div className='cardleft__time'>
        <img src={timeIcon} alt="tiempo de preparación"/>
        <div className='cardleft__time--text'>{props.data.preparationTime} min</div>
      </div>
      <div className='cardleft_image'>
        <img src={props.data.picture} alt="foto de comida"/>
      </div>
    </button>
  )
}

export default RecipeCardHorizontalIzquierda;
