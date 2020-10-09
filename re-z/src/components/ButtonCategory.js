import React from 'react';
import { Link } from 'react-router-dom';
// import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/ButtonCategory.css';

import CategoryCard from './CategoryCard';


const ButtonCategory = () => {

  //FETCH DE LAS RECETAS (usando llamadas a la API)
  // const [recipeList] = useFetchRecipe('https://apidjango.azurewebsites.net/api/Recipe-list/');

   // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))

  const chickenIndex = recipesLocalStorage.indexOf(recipesLocalStorage.find( (item) => {
    return item.category === "chicken"
  }))

  const vegetarianIndex = recipesLocalStorage.indexOf(recipesLocalStorage.find( (item) => {
    return item.category === "vegetarian"
  }))

  const meatIndex = recipesLocalStorage.indexOf(recipesLocalStorage.find( (item) => {
    return item.category === "Meat"
  }))

  const pastaIndex = recipesLocalStorage.indexOf(recipesLocalStorage.find( (item) => {
    return item.category === "pasta"
  }))


  return (
    <section className="buttonCategory">
      <h3 className="buttonCategory__title">Categorías</h3>
      <div className="buttonCategory__buttons">
        <Link to={`/home/category/${recipesLocalStorage[chickenIndex].category}`}>
          <CategoryCard {...recipesLocalStorage[chickenIndex]}/>
        </Link>
        <Link to={`/home/category/${recipesLocalStorage[vegetarianIndex].category}`}>
          <CategoryCard {...recipesLocalStorage[vegetarianIndex]}/>
        </Link>
        <Link to={`/home/category/${recipesLocalStorage[meatIndex].category}`}>
          <CategoryCard {...recipesLocalStorage[meatIndex]}/>
        </Link>
        <Link to={`/home/category/${recipesLocalStorage[pastaIndex].category}`}>
          <CategoryCard {...recipesLocalStorage[pastaIndex]}/>
        </Link>
      </div>
    </section>
  )
}

export default ButtonCategory;
