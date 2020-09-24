import React from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';
import { useParams } from 'react-router-dom';

import './styles/GridRecipe.css';

import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';

import data from '../../recipe.json';

function GridRecipe () {

  //FETCH DE LAS RECETAS
  const [recipeList] = useFetchRecipe(data.recipes)

  //NAVEGACION AL DAR CLICK EN LAS CARDS
  const {myId} = useParams();
  const recipe = recipeList.find(item => item.id === parseInt(myId));

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