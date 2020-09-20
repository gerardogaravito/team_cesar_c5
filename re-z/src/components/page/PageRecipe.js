import React from 'react';
import { useFetchRecipe } from '../../hooks/useFetchRecipe';

import Navbar from '../Navbar';
import RecipeInfo from '../RecipeInfo';
import data from '../../../recipe.json';


function PageRecipe (){
  const [recipeList] = useFetchRecipe(data.recipes)
      return (
            <div>
                <Navbar />
                {
                recipeList.map((item) => (
                <RecipeInfo data={item} key={item.id} />
                ))
              }
            </div>
      )
  }

export default PageRecipe; 