import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RecipeCardVerticalSimple.css'
import fotoComida5 from '../images/fotoComida5.png';

/* class RecipeCardVerticalSimple extends React.Component {
    render() {
      return (
        <Link to="/">
          <div className='cardVertical'>
            <img src={fotoComida5} alt="foto de comida"/>
            <h3 className="cardVertical__title">Lorem Ipsum 36</h3>
         </div>
        </Link>
      )
    }
  } */
const RecipeCardVerticalSimple=({name})=>{
  return(
    <Link to="/">
      <div className="cardVertical">
        <img src={fotoComida5} alt="foto de comida"/>
        <h3 className="cardVertical__title">{name}</h3>
      </div>
    </Link>
  )

}
  export default RecipeCardVerticalSimple;