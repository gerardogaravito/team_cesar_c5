import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RecipeCardHorizontalDerecha.css';
import CookTimeBlack from '../Animation/CookTimeBlack';


const RecipeCardHorizontalDerecha =(props) => {

  return (
    <Link to={`/home/page-recipe/${props.data.id}`}>
      <button className='cardright'>
        <div className='cardright__info'>
          <div className='cardright__info--title'>{props.data.name}</div>
          <div className='cardright__info--text'>{props.data.instructions}</div>
        </div>
        <div className='cardright__time'>
          <CookTimeBlack />
          <div className='cardright__time--text'>{props.data.preparationTime} min</div>
        </div>
          <img className='cardright__image' src={props.data.img_url} alt="foto de comida"/>
      </button>
    </Link>
  )
}

export default RecipeCardHorizontalDerecha