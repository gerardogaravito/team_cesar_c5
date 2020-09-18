import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CarruselItems.css';

const CarruselItems = ({ name, picture }) => (
    
        
        <div className="carousel-item">
            <img src={picture} alt={name} className="carousel-item__img"/>
            <div class="carousel-item__details">
            <div className="like-box">
            <div className="like" id="like"></div>
            </div>
            <Link to="/home/Page-Recipe" class="carousel-item__details--title">{name}</Link>
            </div>
        </div>
    );

export default CarruselItems;

  

