import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/RecipeCardHorizontalSimple.css" // traer los estilos
import fotoComida from '../images/fotoComida.png'; //se trae la imagen y la guarda en la variable fotoComida


function RecipeCardHorizontalSimple (props){

  return (
    <Link to="/">
      <button className='cardsimple'>
        <img className='cardsimple__image' src={props.data.picture} alt="Foto de Comida"/>
        <div className='cardsimple__info'>
          <h1 className='cardsimple__info--title'>{props.data.name}</h1>
        </div>
      </button>
    </Link>
  )
}

export default RecipeCardHorizontalSimple;