import React from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/GridRecipe.css';

import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';

import data from '../../recipe.json';

function GridRecipe () {

  const [recipeList] = useFetchRecipe(data.recipes)

  return(
    <div className='favoritesContainer'>
    <div className="gridContainer">
      <div className="gridContainer__vertical">
      {
        recipeList.slice(0, 1).map((item) => (
          <React.Fragment>
            <RecipeCardVerticalSimple data={item} key={item.id}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainer__square1">
      {
        recipeList.slice(1, 2).map((item) => (
          <React.Fragment>
            <RecipeCardSquareSimple data={item} key={item.id}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainer__square2">
      {
        recipeList.slice(2, 3).map((item) => (
          <React.Fragment>
            <RecipeCardSquareSimple data={item} key={item.id}/>
          </React.Fragment>
        ))
      }
      </div>
      <div className="gridContainer__horizontal">
      {
        recipeList.slice(3, 4).map((item) => (
          <React.Fragment>
            <RecipeCardHorizontalSimple data={item} key={item.id}/>
          </React.Fragment>
        ))
      }
      </div>
    </div>
    </div>
  )
}

export default GridRecipe;