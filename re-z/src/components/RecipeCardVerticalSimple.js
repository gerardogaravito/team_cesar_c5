import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './styles/RecipeCardVerticalSimple.css'

const RecipeCardVerticalSimple = (props) => {
  return(
    <Link to='{/home/page-recipe/${id}}'>
      <div className="cardVertical">
        <div className="cardVerticalImage">
          <img src={props.data.picture} alt="foto de comida"/>
        </div>
        <div className="cardVerticalTitle">
          <h3 className="cardVertical__title">{props.data.name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCardVerticalSimple;