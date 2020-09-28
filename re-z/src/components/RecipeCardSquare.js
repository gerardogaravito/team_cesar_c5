import React from 'react';

import './styles/RecipeCardSquare.css'
import CookTime from '../Animation/CookTime';
// import fotoComida3 from '../images/fotoComida3.png'

const RecipeCardSquare =({name,picture, preparationTime})=>{
    return <button className="CardSquare">
    <img className="CardSquare__image" src={picture}  alt="RecipentCardFood"/>
    <div className="CardSquare__text">
        <h1>{name}</h1>
        <p className='CardSquare__text_paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Accusantium pariatur quia reprehenderit, distinctio quidem aut sed officia? Omnis qui voluptates 
        eaque quia sequi? Quasi sit molestias minima nihil autem repellat.</p>
        <div className="CardSquare__time">
            <CookTime />
            <div className='CardSquare__time--text'>{preparationTime} min</div>
        </div>
    </div>
    </button>;
}

export default RecipeCardSquare;