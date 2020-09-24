import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';

import './styles/CarruselItems.css';
import TimeIcon from '../images/Atomos/time-icon-yellow.svg';



const CarruselItems = (props) => {
    const { id, picture, name, preparationTime } = props;
    const handleSetFavorite = () => {
        console.log(handleSetFavorite);
        props.setFavorite({
            id, picture, name, preparationTime
            })
        }
   
        /*  const like = document.getElementById('like');
        like.addEventListener('onClick', (event) => {
            console.log(event);
            like.classList.toggle('is-liked');
        }) */
        
    return(
        <div className="carousel-item">
            <img src={picture} alt={name} className="carousel-item__img"/>
            <div className="carousel-item__details">
            <div className="like-box">
            <div onClick={handleSetFavorite} className="like" id="like"></div>
            </div>
            <Link to={`/home/page-recipe/${id}`}
                style={{ textDecoration: 'none' }}
            >
                <p className="carousel-item__details--title">{name}</p>
            </Link>
            <div className="time-icon">
                <img src={TimeIcon} alt="Icon" />
                <p>{preparationTime}</p>
            </div>
            </div>
        </div>   
        )
    }

    CarruselItems.propTypes = {
        picture: PropTypes.string,
        name: PropTypes.string,
        preparationTime: PropTypes.number,      
    }

const mapDispatchToProps = {
        setFavorite,
}

export default connect(null, mapDispatchToProps)(CarruselItems);

  

