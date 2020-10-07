import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/RecipeCardHorizontalSimple.css" // traer los estilos


function RecipeCardHorizontalSimple (props){

  return (
    <Link to={`/home/page-recipe/${props.data.id}`}>
      <button className='cardsimple'>
        <img className='cardsimple__image' src={props.data.img_url} alt="Foto de Comida"/>
        <div className='cardsimple__info'>
          <h1 className='cardsimple__info--title'>{props.data.name}</h1>
        </div>
      </button>
    </Link>
  )
}

export default RecipeCardHorizontalSimple;