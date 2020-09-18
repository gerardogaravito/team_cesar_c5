import React from 'react';

import './styles/CarruselItems.css';


function CarruselItems(props){
    return(
        <div className="carousel-item">
            <img src={props.data.picture} alt={props.data.name} className="carousel-item__img"/>
            <div class="carousel-item__details">
            <div className="like-box">
            <div className="like" id="like"></div>
            </div>
            <p class="carousel-item__details--title">{props.data.name}</p>
            </div>
        </div>   
    )
        
    }

export default CarruselItems;

  

