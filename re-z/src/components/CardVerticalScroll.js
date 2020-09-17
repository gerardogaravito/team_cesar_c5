import React , {useState} from 'react';

import './styles/CardVerticalScroll.css';
import RecipeCardHorizontalDerecha from './RecipeCardHorizontalDerecha';
import RecipeCardHorizontalIzquierda from './RecipeCardHorizontalIzquierda';
import data from '../../recipe.json';

function CardVerticalScroll() {

  const [recipeList, setRecipeList] = useState([])

  setRecipeList(data.recipes)

    return (
    <div className='scrollcontainer' >
      <ul>
        {
          recipeList.map((item) => (
            <React.Fragment>
              <RecipeCardHorizontalDerecha data={item} key={item.id}/>
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