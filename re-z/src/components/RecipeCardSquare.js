import React from 'react';

import './styles/RecipeCardSquare.css'
import timeIcon from '../images/Atomos/time-icon-yellow.svg'
import fotoComida3 from '../images/fotoComida3.png'

class RecipeCardCuadradoInfo extends React.Component{
    render(){
        return <button className="cardcuadro">
        <div className="cardcuadro__image">
            <img src={fotoComida3}  alt="RecipentCardFood"/>
        </div>
        <div className="cardcuadro__text">
            <div className="cardcuadro__text--title">
                <div>Lorem Ipsum 20</div>
                <div className='cardcuadro__text_paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Accusantium pariatur quia reprehenderit, distinctio quidem aut sed officia? Omnis qui voluptates 
                eaque quia sequi? Quasi sit molestias minima nihil autem repellat.</div>
            </div>
            <div className="cardcuadro__time">
                <div className="cardcuadro__time--picture">
                    <img src={timeIcon} alt="tiempo preparación"/>
                    <div className='cardcuadro__time--text'>70 min</div>
                </div>
            </div>
        </div>
        </button>;
    }
}

export default RecipeCardCuadradoInfo;