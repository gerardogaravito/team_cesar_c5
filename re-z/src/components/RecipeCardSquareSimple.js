import React from 'react';
import {Link} from 'react-router-dom';
import './styles/RecipeCardSquareSimple.css'
import fotoComida6 from '../images/fotoComida6.png';

const RecipeCardSquareSimple=({name}) => {
            return (
                <Link to="/">
                <div className='cardSquareSimple'>
                   <img src={fotoComida6} alt="foto de comida"/>
                    <h3 className="cardSquareSimple__title">{name}</h3>
                </div>
                </Link>
            )
    }
  export default RecipeCardSquareSimple;