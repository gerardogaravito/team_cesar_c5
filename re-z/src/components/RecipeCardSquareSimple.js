import React from 'react';
import {Link} from 'react-router-dom';
import './styles/RecipeCardSquareSimple.css'


const RecipeCardSquareSimple=(props) => {
    return (
        <Link to={`/home/page-recipe/${props.data.id}`}>
        <div className='cardSquareSimple'>
            <img className='cardSquareSimple__image' src={props.data.img_url} alt="foto de comida"/>
            <div className="cardSquareSimple__title">
                <h3 className="cardSquareSimple__title--text">{props.data.name}</h3>
            </div>    
        </div>
        </Link>
    )
}
export default RecipeCardSquareSimple;