import React from 'react';

import './styles/CarruselHome.css';
import RecipeCardCarruselHome  from './RecipeCardCarruselHome'


class CarruselHome extends React.Component {

    render() {

      return (
        <div className="Card-container">
                <RecipeCardCarruselHome />
        </div> 
      );
    }
  }
export default CarruselHome;