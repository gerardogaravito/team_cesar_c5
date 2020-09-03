import React from 'react';

import './styles/RecipeCardCarruselHome.css';
import PhotoFood from '../images/Photo-food.png'

class RecipeCardCarruselHome extends React.Component {

    render() {
      return (
        <div className="Card-container">
          <div className="CardImage-food">
              <img src={PhotoFood} alt="PhotoFood"/>
            <div className="Card-information">
                <h1>Lorem ipsum</h1>
                <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className="Card-backgroundt"></div>
            </div>
          </div>
        </div> 
      );
    }
  }
export default RecipeCardCarruselHome;

