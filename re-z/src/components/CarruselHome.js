import React from 'react';
// import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/CarruselHome.css';
import CarruselItems from './CarruselItems'



const CarruselHome = () => {
    //FETCH DE LAS RECETAS (usando el json mockup)
  // const [recipeList] = useFetchRecipe(data.recipes)

  //FETCH DE LAS RECETAS (usando llamadas a la API)
  // const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/')

  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))

      return (
        <section className="Principal-container">
        <div className="Triangle"></div>
          <section className="carousel">
            <div className="carousel__container">
              {
                recipesLocalStorage.map((item) => (
                  <CarruselItems data={item} key={item.id} {...item}/>
                ))
              }
            </div>
          </section>
              {/* {favoritos.length > 0 &&
                <section className="carousel">
                  <div className="carousel__container">
                      {favoritos.map((item) =>
                      <CarruselItems 
                        key={item.id} 
                        {...item}/>
                      )}
                  </div>
                </section>
              } */}
        </section>
      );
}

export default CarruselHome;