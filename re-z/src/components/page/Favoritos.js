import React from 'react';

import Navbar from '../Navbar';
import RecipeInfoPage from '../RecipeInfoPage';
import "../styles/Favoritos.css"

class Favoritos extends React.Component{
  render(){
      return (
          <div className="Home-container">
              <Navbar />
              <div className="Favoritos-container">
                <h1 className="favoritos__title">Tus Favoritos</h1>
                
              </div>
              <RecipeInfoPage/>
          </div>
      )
  }
}

export default Favoritos; 