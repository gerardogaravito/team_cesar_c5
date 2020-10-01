import React from 'react';

import './styles/CategoryCard.css';
import IMG from '../images/fotoComida.png' //esta imagen esta temporal ya que hay que sustituirla por una de la API

const CategoryCard  = ({category, onClick}) => {

    return(
        <div onClick={onClick} className="Category__container">
            <div className="Category__text">
                <p>{category}</p>
            </div>
            <img src={IMG} alt="test" className="Category__img"/>
        </div>
    )
}

export default CategoryCard;