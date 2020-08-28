import React from 'react';

import './styles/RecipeCardHorizontalDerecha.css'
import timeIcon from '../images/Atomos/time-icon.svg'
import fotoComida2 from '../images/fotoComida2.png'

class RecipeCardHorizontalDerecha extends React.Component {
  render() {
    return <button className='cardright'>
      <div className='cardright__info'>
        <div className='cardright__info--title'>Lorem Ipsum 30</div>
        <div className='cardright__info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia fuga architecto error perferendis aperiam pariatur voluptate tenetur incidunt. Maiores temporibus odio voluptates obcaecati ex recusandae iusto corporis ducimus? Similique?</div>
        <div className='cardright__info--time'>
          <img src={timeIcon} alt="tiempo de preparación"/>
          <div className='cardright__info--time-text'>70 min</div>
        </div>
      </div>
      <div className='cardright_image'>
        <img src={fotoComida2} alt="foto de comida"/>
      </div>
    </button>
  }
}

export default RecipeCardHorizontalDerecha