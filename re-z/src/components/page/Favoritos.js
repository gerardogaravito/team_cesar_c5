import React from 'react';

import Navbar from '../Navbar';
import "../styles/Favoritos.css"


function Favoritos () {
  
      return (
          <div className="Home-container">
              <Navbar />
              <div className="Favoritos-container">
                <h1 className="favoritos__title">Tus Favoritos</h1> 
              </div>
              
              

          </div>
      );
  }

export default Favoritos; 