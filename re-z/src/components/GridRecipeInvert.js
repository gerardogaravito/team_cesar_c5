import React from 'react';
// import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/GridRecipeInvert.css';

import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';

// import data from '../../recipe.json';

function GridRecipeInvert () {

    //FETCH DE LAS RECETAS (usando el json mockup)
  // const [recipeList] = useFetchRecipe(data.recipes)

  //FETCH DE LAS RECETAS (usando llamadas a la API)
  // const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/')

  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))

  return(
    <div className='favoritesContainerInv'>
    <div className="gridContainerInv">
      <div className="gridContainerInv__vertical">
      {
        recipesLocalStorage.slice(19, 20).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardVerticalSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainerInv__square1">
      {
        recipesLocalStorage.slice(20, 21).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardSquareSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainerInv__square2">
      {
        recipesLocalStorage.slice(21, 22).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardSquareSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainerInv__horizontal">
      {
        recipesLocalStorage.slice(22, 23).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardHorizontalSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
    </div>
    </div>
  )
}

export default GridRecipeInvert;