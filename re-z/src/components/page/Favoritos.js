import React from 'react';

import Navbar from '../Navbar';
import FooterA from '../FooterA';
import "../styles/Favoritos.css"

class Favoritos extends React.Component{
  render(){
      return (
          <div className="Home-container">
              <Navbar />
              <div className="Favoritos-container">
                <h1 className="favoritos__title">Tus Favoritos</h1>
              </div>
          </div>
      )
  }
}

export default Favoritos; 