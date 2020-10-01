import React , {useState} from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/CardVerticalScroll.css';
import RecipeCardHorizontalDerecha from './RecipeCardHorizontalDerecha';
import RecipeCardHorizontalIzquierda from './RecipeCardHorizontalIzquierda';
import data from '../../recipe.json';

function CardVerticalScroll() {
  
  // ----- USANDO JSON Y EL HOOK DE USESTATE-----
  // const [recipeList, setRecipeList] = useState(data.recipes)
  
  // setRecipeList(data.recipes)
  
  // ----- CUSTOM HOOK PERO USANDO EL JSON ------
  const [recipeList] = useFetchRecipe(data.recipes)

  // ----- USANDO CUSTOM HOOK Y LA API ----------
  // const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/')

  console.log(recipeList)

    return (
    <div className='scrollcontainer' >
      <ul className='scrollcontainer__list'>
        {
          recipeList.slice(0, 1).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalDerecha data={item} />
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(1, 2).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalIzquierda data={item} {...item}/>
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(2, 3).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalDerecha data={item} />
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(3, 4).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalIzquierda data={item}  {...item}/>
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(5, 6).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalDerecha data={item} />
            </React.Fragment>
          ))
        }
        {
          recipeList.slice(6, 7).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalIzquierda data={item}  {...item}/>
            </React.Fragment>
          ))
        }
      </ul>
    </div>
    )
  }
  
export default CardVerticalScroll;
