import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RecipeCardHorizontalDerecha.css';

import timeIcon from '../images/Atomos/time-icon.svg';


const RecipeCardHorizontalDerecha =(props) => {

  return (
    <Link to={`/home/page-recipe/${props.data.id}`}>
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
    </Link>
  )
}

export default RecipeCardHorizontalDerecha