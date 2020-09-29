import React, { useEffect } from 'react';

import Navbar from '../Navbar';
import GridRecipe from '../GridRecipe';
import GridRecipeInvert from '../GridRecipeInvert';

import "../styles/Favoritos.css"


function Favoritos () {

  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])
  
      return (
        <React.Fragment >
          <div className="Home-container">
              <Navbar />
              <div className="Favoritos-container">
                <h1 className="favoritos__title">Tus Favoritos</h1> 
              </div>
          </div>
          <GridRecipe />
          <GridRecipeInvert />
          <GridRecipe />
        </React.Fragment>
      )
  }

export default Favoritos; 