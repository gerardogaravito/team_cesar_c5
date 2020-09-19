import React from 'react';

import './styles/RecipeCardHorizontalIzquierda.css'
import timeIcon from '../images/Atomos/time-icon.svg'
import fotoComida2 from '../images/fotoComida4.png'

function RecipeCardHorizontalIzquierda (props) {

  return (
    <button className='cardleft'>
      <div className='cardleft__info'>
        <div className='cardleft__info--title'>{props.data.name}</div>
        <div className='cardleft__info--text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium pariatur quia reprehenderit, distinctio quidem aut sed officia? Omnis qui voluptates eaque quia sequi? Quasi sit molestias minima nihil autem repellat.</div>
      </div>
      <div className='cardleft__time'>
        <img src={timeIcon} alt="tiempo de preparación"/>
        <div className='cardleft__time--text'>70 min</div>
      </div>
      <div className='cardleft_image'>
        <img src={props.data.picture} alt="foto de comida"/>
      </div>
    </button>
  )
}

export default RecipeCardHorizontalIzquierda;
