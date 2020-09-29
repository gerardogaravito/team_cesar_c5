import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RecipeCardSquare.css'
import CookTime from '../Animation/CookTime';
// import fotoComida3 from '../images/fotoComida3.png'

const RecipeCardSquare =({name,picture, preparationTime, id, instructions})=>{
    return (
        <Link to={`/home/page-recipe/${id}`}>
            <button className="CardSquare">
            <img className="CardSquare__image" src={picture}  alt="RecipentCardFood"/>
            <div className="CardSquare__text">
                <h1>{name}</h1>
                <p className='CardSquare__text_paragraph'>{instructions}</p>
                <div className="CardSquare__time">
                    <CookTime />
                    <div className='CardSquare__time--text'>{preparationTime} min</div>
                </div>
            </div>
            </button>
        </Link>
    )
}

export default RecipeCardSquare;