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
      <ul>
        {
          recipeList.slice(0, 6).map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalDerecha data={item} key={item.id}/> {/*Falta modificar para que no se repita la receta dos veces*/}
              <RecipeCardHorizontalIzquierda data={item} key={item.id} />
            </React.Fragment>
          ))
        }
      </ul>
    </div>
    )
  }
  
export default CardVerticalScroll;
  
        // <RecipeCardHorizontalDerecha recipe={recipe} key={recipe.id}/>
        // <RecipeCardHorizontalIzquierda />
        // <RecipeCardHorizontalDerecha />
        // <RecipeCardHorizontalIzquierda />
        // <RecipeCardHorizontalDerecha/>
        // <RecipeCardHorizontalIzquierda /> 