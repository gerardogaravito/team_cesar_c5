import React from 'react';

import './styles/CarruselHome.css';
import RecipeCardCarruselHome  from './RecipeCardCarruselHome'


class CarruselHome extends React.Component {

    render() {

      return (
        <section className="Principal-container">
        <div className="Triangle">

        </div>
        <div className="Card-container">
          <div className="tarjetas">
            <div className="tarjetas__contenido">
              <div className="tarjetas__elemento">
                <RecipeCardCarruselHome />
              </div>
              <div className="tarjetas__elemento">
                <RecipeCardCarruselHome />
              </div>
              <div className="tarjetas__elemento">
                <RecipeCardCarruselHome />
              </div>
            </div>
          </div> 
        </div> 
        </section>
      );
    }
  }
export default CarruselHome;