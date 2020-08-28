import React from 'react';

import "./styles/RecipeCardHorizontalSimple.css" // traer los estilos
import fotoComida from '../images/fotoComida.png'; //se trae la imagen y la guarda en la variable fotoComida

class RecipeCardHorizontalSimple extends React.Component {
  render() {
    return <div className='cardsimple'>
      <div className='cardsimple__info'>
        <h1 className='cardsimple__info--title'>Lorem Ipsum 36</h1>
      </div>
      <img className='cardsimple__image' src={fotoComida} alt="Foto de Comida"/>
    </div>
  }
}

export default RecipeCardHorizontalSimple;