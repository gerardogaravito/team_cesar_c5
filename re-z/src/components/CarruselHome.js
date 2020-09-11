import React from 'react';

import './styles/CarruselHome.css';
import PhotoFood from '../images/Photo-food.png'


class CarruselHome extends React.Component {

    render() {

      return (
        <section className="Principal-container">
        <div className="Triangle"></div>
          <section className="carousel">
            <div className="carousel__container">
              <div className="carousel-item">
                <img src={PhotoFood} alt="" className="carousel-item__img"/>
                <div class="carousel-item__details">
                <div className="like-box">
                  <div className="like" id="like"></div>
                </div>
                  <p class="carousel-item__details--title">Recip name</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={PhotoFood} alt="" className="carousel-item__img"/>
                <div class="carousel-item__details">
                <div className="like-box">
                  <div className="like" id="like"></div>
                </div>
                  <p class="carousel-item__details--title">Recip name</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={PhotoFood} alt="" className="carousel-item__img"/>
                <div class="carousel-item__details">
                <div className="like-box">
                  <div className="like" id="like"></div>
                </div>
                  <p class="carousel-item__details--title">Recip name</p>
                </div>
              </div>
              
              
            </div>
          </section>
      
        </section>
      );
    }
  }
export default CarruselHome;