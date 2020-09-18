import React, { Component } from 'react';

import './styles/CarruselHome.css';
import CarruselItems from './CarruselItems'


class CarruselHome extends Component {

  render() {
      return (
        <section className="Principal-container">
        <div className="Triangle"></div>
          <section className="carousel">
            <div className="carousel__container">
              <CarruselItems />
            </div>
          </section>
        </section>
      );
}
}
   
export default CarruselHome;