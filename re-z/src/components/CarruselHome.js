import React from 'react';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/CarruselHome.css';
import CarruselItems from './CarruselItems'
import data from '../../recipe.json';


function CarruselHome () {
  const [recipeList] = useFetchRecipe(data.recipes)

      return (
        <section className="Principal-container">
        <div className="Triangle"></div>
          <section className="carousel">
            <div className="carousel__container">
              {
                recipeList.map((item) => (
                  <CarruselItems data={item} key={item.id} />
                ))
              }
            </div>
          </section>
        </section>
      );
}
   
export default CarruselHome;