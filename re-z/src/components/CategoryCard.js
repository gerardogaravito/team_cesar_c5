import React from 'react';

import './styles/CategoryCard.css';

const CategoryCard  = ({category, onClick, picture}) => {

    return(
        <div onClick={onClick} className="Category__container">
            <div className="Category__text">
                <p>{category}</p>
            </div>
            <img src={picture} alt="test" className="Category__img"/>
        </div>
    )
}

export default CategoryCard;