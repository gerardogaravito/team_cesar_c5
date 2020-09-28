import React from 'react';

import './styles/RecipeCardSquare.css'
import CookTime from '../Animation/CookTime';
// import fotoComida3 from '../images/fotoComida3.png'

const RecipeCardCuadradoInfo =({name,picture, preparationTime})=>{
    return <button className="cardcuadro">
    <img className="cardcuadro__image" src={picture}  alt="RecipentCardFood"/>
    <div className="cardcuadro__text">
        <h1>{name}</h1>
        <p className='cardcuadro__text_paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Accusantium pariatur quia reprehenderit, distinctio quidem aut sed officia? Omnis qui voluptates 
        eaque quia sequi? Quasi sit molestias minima nihil autem repellat.</p>
        <div className="cardcuadro__time">
            <CookTime />
            <div className='cardcuadro__time--text'>{preparationTime} min</div>
        </div>
    </div>
    </button>;
}

export default RecipeCardCuadradoInfo;