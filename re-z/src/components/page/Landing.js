import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import { useFetchRecipe } from '../../hooks/useFetchRecipe';

import '../styles/Landing.css';
import NavBarLanding from '../NavBarLanding'
import CardVerticalScroll from '../CardVerticalScroll';
import RecipeCardSquare from '../RecipeCardSquare';
import RecipeGarden from '../RecipeGarden';
import GridRecipe from '../GridRecipe';
import GridRecipeInvert from '../GridRecipeInvert';

function Landing (){

  useEffect(() => {
    window.scroll(0, 0)//esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
  }, []);
  
  //FETCH DE LAS RECETAS (usando llamadas a la API)
  const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/')
  
  // se guarda la llamada de las recetas en el local storage para usarse en toda la app
  localStorage.setItem( "recipes", JSON.stringify( recipeList ))

  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))

  return (
      <div className="landing">
            <header>
              <NavBarLanding/>
            </header>
            <div className="landing-container-principal">
              <div className="landing__spot">
                <ReactPlayer url='https://youtu.be/kuB8rR2b2Ak'
                width='100%'
                height='100%'
                playing={true}
                loop
                muted/>
              </div>
              <div className="landing__recipes">
                <CardVerticalScroll />
              </div>
            </div>

            <div className="landing__container-secundary">
              {
                recipesLocalStorage.slice(30,33).map(item=>(
                  <RecipeCardSquare
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  img_url={item.img_url}
                  preparationTime={item.preparationTime}
                  instructions={item.instructions}
                  />
                ))
              }
            </div>
            <RecipeGarden title="Recetas Recomendadas" name='Ver más' />
            <section className='landing__gridSection'>
              <GridRecipe />
              <GridRecipeInvert />
              <GridRecipe />
            </section>
      </div>
  )
}

export default Landing