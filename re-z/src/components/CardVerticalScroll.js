import React from 'react';

import './styles/CardVerticalScroll.css';
import RecipeCardHorizontalDerecha from './RecipeCardHorizontalDerecha';
import RecipeCardHorizontalIzquierda from './RecipeCardHorizontalIzquierda';

class CardVerticalScroll extends React.Component {
  render() {
    return (
    <div className='scrollcontainer' >
      <RecipeCardHorizontalDerecha />
      <RecipeCardHorizontalIzquierda />
      <RecipeCardHorizontalDerecha />
      <RecipeCardHorizontalIzquierda />
      <RecipeCardHorizontalDerecha/>
      <RecipeCardHorizontalIzquierda /> 
    </div>
    )
  }
}

export default CardVerticalScroll;