import React, { useEffect } from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/CarruselHome.css';
import CarruselItems from './CarruselItems'
import data from '../../recipe.json';


const CarruselHome = () => {
  const [recipeList] = useFetchRecipe(data.recipes)

      return (
        <section className="Principal-container">
        <div className="Triangle"></div>
          <section className="carousel">
            <div className="carousel__container">
              {
                recipeList.map((item) => (
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