import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CarruselItems.css';
import TimeIcon from '../images/Atomos/time-icon-yellow.svg';


function CarruselItems(props){
    return(
        <div className="carousel-item">
            <img src={props.data.picture} alt={props.data.name} className="carousel-item__img"/>
            <div className="carousel-item__details">
            <div className="like-box">
            <div className="like" id="like"></div>
            </div>
            <Link to="/home/Page-Recipe" style={{ textDecoration: 'none' }}>
            <p className="carousel-item__details--title">{props.data.name}</p>
            </Link>
            <div className="time-icon">
                <img src={TimeIcon} alt="Icon" />
                <p>{props.data.preparationTime}</p>
            </div>
            </div>
        </div>   
        )
    }

export default CarruselItems;

  

