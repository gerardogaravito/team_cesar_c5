import React , {useState} from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/CardVerticalScroll.css';
import RecipeCardHorizontalDerecha from './RecipeCardHorizontalDerecha';
import RecipeCardHorizontalIzquierda from './RecipeCardHorizontalIzquierda';
import data from '../../recipe.json';

function CardVerticalScroll() {

  const [recipeList] = useFetchRecipe(data.recipes)
  // const [recipeList, setRecipeList] = useState(data.recipes)

  // setRecipeList(data.recipes)

    return (
    <div className='scrollcontainer' >
      <ul className='scrollcontainer__list'>
        {
          recipeList.slice(0, 1).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalDerecha data={item} key={item.id}/>
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(1, 2).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalIzquierda data={item} key={item.id} />
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(2, 3).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalDerecha data={item} key={item.id}/>
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(3, 4).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalIzquierda data={item} key={item.id} />
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(5, 6).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalDerecha data={item} key={item.id}/>
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(6, 7).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalIzquierda data={item} key={item.id} />
            </React.Fragment>
          ))
        }
      </ul>
    </div>
    )
  }
  
export default CardVerticalScroll;
