import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RecipeCardVerticalSimple.css'

const RecipeCardVerticalSimple = (props) => {
  return(
    <Link to={`/home/page-recipe/${props.data.id}`}>
      <div className="cardVertical">
        <img className="cardVerticalImage" src={props.data.img_url} alt="foto de comida"/>
        <div className="cardVerticalTitle">
          <h3 className="cardVertical__title">{props.data.name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCardVerticalSimple;