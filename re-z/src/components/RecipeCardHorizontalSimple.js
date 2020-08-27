import React from 'react';

import "./styles/RecipeCardHorizontalSimple.css" // traer los estilos
import fotoComida from '../images/fotoComida.jpg'; //se trae la imagen y la guarda en la variable fotoComida

class RecipeCardHorizontalSimple extends React.Component {
  render() {
    return <div className='card'>
      <div className='banner'>
        <h1 className='banner__title'>Lorem Ipsum 36</h1>
      </div>
      <img className='card__image' src={fotoComida} alt="Foto de Comida"/>
    </div>
  }
}

export default RecipeCardHorizontalSimple;