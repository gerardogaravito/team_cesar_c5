import React from 'react';

import './styles/CategoryCard.css';

const CategoryCard  = ({category, onClick, img_url}) => {

    return(
        <div onClick={onClick} className="Category__container">
            <div className="Category__text">
                <p>{category}</p>
            </div>
            <img src={img_url} alt="test" className="Category__img"/>
        </div>
    )
}

export default CategoryCard;