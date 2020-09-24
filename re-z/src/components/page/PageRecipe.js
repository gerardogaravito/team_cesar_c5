import React from 'react';
import { useFetchRecipe } from '../../hooks/useFetchRecipe';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar';
import RecipeInfo from '../RecipeInfo';
import data from '../../../recipe.json';


function PageRecipe (){
  const {myId} = useParams();
  const [recipeList] = useFetchRecipe(data.recipes);
  const recipe = recipeList.find(item => item.id === parseInt(myId));
      return (
            <div>
                <Navbar />
                <RecipeInfo data={recipe} key={recipe.id} />
            </div>
      )
  }

export default PageRecipe; 