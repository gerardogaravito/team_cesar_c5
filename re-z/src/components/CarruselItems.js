import React from 'react';
import { Link } from 'react-router-dom';


import './styles/CarruselItems.css';
import CookTime from '../Animation/CookTime';
import HeartLike from '../Animation/HeartLike';


const CarruselItems = (props) => {
    const { id, img_url, name, preparationTime } = props;
        
    return(
        <div className="carousel-item">
            <img src={img_url} alt={name} className="carousel-item__img"/>
            <div className="carousel-item__details">
            <HeartLike />
            <Link to={`/home/page-recipe/${id}`}
                style={{ textDecoration: 'none' }}
            >
                <p className="carousel-item__details--title">{name}</p>
            </Link>
            <div className="time-icon">
                <CookTime />
                <p>{preparationTime} min</p>
            </div>
            </div>
        </div>   
        )
    }


export default CarruselItems;

  

