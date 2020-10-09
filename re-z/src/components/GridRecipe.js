import React from 'react';
// import { useFetchRecipe } from '../hooks/useFetchRecipe';
// import { useParams } from 'react-router-dom';

import './styles/GridRecipe.css';

import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';

// import data from '../../recipe.json';

function GridRecipe () {

  //FETCH DE LAS RECETAS (usando el json mockup)
  // const [recipeList] = useFetchRecipe(data.recipes)

  //FETCH DE LAS RECETAS (usando llamadas a la API)
  // const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/')

  //NAVEGACION AL DAR CLICK EN LAS CARDS
  // const {myId} = useParams();
  // const recipe = recipeList.find(item => item.id === parseInt(myId));

  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))

  return(
    <div className='favoritesContainer'>
    <div className="gridContainer">
      <div className="gridContainer__vertical">
      {
        recipesLocalStorage.slice(18, 19).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardVerticalSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainer__square1">
      {
        recipesLocalStorage.slice(11, 12).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardSquareSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainer__square2">
      {
        recipesLocalStorage.slice(12, 13).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardSquareSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainer__horizontal">
      {
        recipesLocalStorage.slice(13, 14).map((item) => (
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

export default GridRecipe;