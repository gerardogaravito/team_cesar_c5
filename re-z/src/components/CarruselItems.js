import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CarruselItems.css';
import TimeIcon from '../images/Atomos/time-icon-yellow.svg';


function CarruselItems(props){
    return(
        <div className="carousel-item">
            <img src={props.data.picture} alt={props.data.name} className="carousel-item__img"/>
            <Link to="/home/Page-Recipe">
            <div className="carousel-item__details">
            <div className="like-box">
            <div className="like" id="like"></div>
            </div>
            <p className="carousel-item__details--title">{props.data.name}</p>
            <div className="time-icon">
                <img src={TimeIcon} alt="Icon" />
                <p>{props.data.preparationTime}</p>
            </div>
            </div>
            </Link>
        </div>   
        )
    }

export default CarruselItems;

  
