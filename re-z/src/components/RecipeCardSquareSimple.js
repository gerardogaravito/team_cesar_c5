import React from 'react';

import "./styles/RecipeCardSquareSimple.css";
import fotoComida from '../images/fotoComida6.png';


class RecipeCardSquareSimple extends React.Component {
  render() {
    return <button className='cardsimpleSquare'>
      <img className='cardsimpleSquare__image' src={fotoComida} alt="Foto de Comida"/>
      <div className='cardsimpleSquare__info'>
        <h1 className='cardsimpleSquare__info--title'>Lorem Ipsum 36 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo ab inventore a sint. Cum quae similique, reiciendis fugit aut neque placeat? Quasi distinctio voluptate, quia iure quod enim quas.</h1>
        {/* <h1 className='cardsimple__info--title'>{this.props.recipeTitle}</h1> */}
      </div>
    </button>
  }
}

export default RecipeCardSquareSimple;