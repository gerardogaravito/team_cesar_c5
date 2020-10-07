import React from 'react';
// import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/CardVerticalScroll.css';
import RecipeCardHorizontalDerecha from './RecipeCardHorizontalDerecha';
import RecipeCardHorizontalIzquierda from './RecipeCardHorizontalIzquierda';
// import data from '../../recipe.json';

function CardVerticalScroll() {
  
  // ----- USANDO JSON Y EL HOOK DE USESTATE-----
  // const [recipeList, setRecipeList] = useState(data.recipes)
  
  // setRecipeList(data.recipes)
  
  // ----- CUSTOM HOOK PERO USANDO EL JSON ------
  // const [recipeList] = useFetchRecipe(data.recipes)

  // ----- USANDO CUSTOM HOOK Y LA API ----------
  // const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/')

  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))

    return (
    <div className='scrollcontainer' >
      <ul className='scrollcontainer__list'>
        {
          recipesLocalStorage.slice(0, 1).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalDerecha data={item} />
            </React.Fragment>
          ))
        }
        {
          recipesLocalStorage.slice(1, 2).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalIzquierda data={item} {...item}/>
            </React.Fragment>
          ))
        }
        {
          recipesLocalStorage.slice(2, 3).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalDerecha data={item} />
            </React.Fragment>
          ))
        }
        {
          recipesLocalStorage.slice(3, 4).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalIzquierda data={item}  {...item}/>
            </React.Fragment>
          ))
        }
        {
          recipesLocalStorage.slice(7, 8).map((item) => (
            <React.Fragment key={item.id}>
              <RecipeCardHorizontalDerecha data={item} />
            </React.Fragment>
          ))
        }
        {
          recipesLocalStorage.slice(6, 7).map((item) => (
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
