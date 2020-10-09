import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar';
import RecipeInfo from '../RecipeInfo';


function PageRecipe (){
  const {myId} = useParams();
  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))
  const recipe = recipesLocalStorage.find(item => item.id === parseInt(myId));

  useEffect(() => {
    window.scroll(0, 0)//esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
  }, []);

      return (
            <div>
                <Navbar />
                <RecipeInfo data={recipe} key={recipe.id} />
            </div>
      )
  }

export default PageRecipe;