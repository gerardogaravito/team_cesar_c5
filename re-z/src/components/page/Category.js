import React from 'react'
import Navbar from '../Navbar'
import GridRecipe from '../GridRecipe'
import GridRecipeInvert from '../GridRecipeInvert'

const Category = () => {
  return(
    <React.Fragment >
    <div className="Home-container">
        <Navbar />
        <div className="Favoritos-container">
          <h1 className="favoritos__title">Cateogría</h1> 
        </div>
    </div>
    <GridRecipe />
    <GridRecipeInvert />
    <GridRecipe />
  </React.Fragment>
  )
}

export default Category;