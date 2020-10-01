import React from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/GridRecipeInvert.css';

import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';

import data from '../../recipe.json';

function GridRecipeInvert () {

  const [recipeList] = useFetchRecipe(data.recipes)

  return(
    <div className='favoritesContainerInv'>
    <div className="gridContainerInv">
      <div className="gridContainerInv__vertical">
      {
        recipeList.slice(4, 5).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardVerticalSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainerInv__square1">
      {
        recipeList.slice(5, 6).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardSquareSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainerInv__square2">
      {
        recipeList.slice(6, 7).map((item) => (
          <React.Fragment key={item.id}>
            <RecipeCardSquareSimple data={item}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainerInv__horizontal">
      {
        recipeList.slice(7, 8).map((item) => (
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