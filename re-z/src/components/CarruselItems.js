import React from 'react';

import './styles/CarruselItems.css';

const CarruselItems = ({ name, picture }) => (
    
        
        <div className="carousel-item">
            <img src={picture} alt={name} className="carousel-item__img"/>
            <div class="carousel-item__details">
            <div className="like-box">
            <div className="like" id="like"></div>
            </div>
            <p class="carousel-item__details--title">{name}</p>
            </div>
        </div>
    );

export default CarruselItems;

  

