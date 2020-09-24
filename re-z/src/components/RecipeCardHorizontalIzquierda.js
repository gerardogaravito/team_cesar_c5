import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RecipeCardHorizontalIzquierda.css'
import timeIcon from '../images/Atomos/time-icon.svg'


const RecipeCardHorizontalIzquierda = (props) => {
  const { id, picture, name, preparationTime, instructions } = props;

  return (
    <Link to={`/home/page-recipe/${id}`}>
    <button className='cardleft'>
      <div className='cardleft__info'>
        <div className='cardleft__info--title'>{name}</div>
        <div className='cardleft__info--text'>{instructions}</div>
      </div>
      <div className='cardleft__time'>
        <img src={timeIcon} alt="tiempo de preparación"/>
        <div className='cardleft__time--text'>{preparationTime} min</div>
      </div>
      <img src={picture} alt="foto de comida" className="cardleft__image"/>
    </button>
    </Link>
  )
}

export default RecipeCardHorizontalIzquierda;
