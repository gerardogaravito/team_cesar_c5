import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/ButtonCategory.css';

import Button from './Button'
import CategoryCard from './CategoryCard'
import data from '../../recipe.json'

const ButtonCategory = () => {

  const [recipeList] = useFetchRecipe(data.recipes)
  // const [recipeList, setRecipeList] = useState(data.recipes) LAS LINEAS COMENTADAS SON PARA CUANDO TENGAMOS LA URL DE LA API

  // setRecipeList(data.recipes)


  const baconIndex = recipeList.indexOf(recipeList.find( (item) => {
    return item.category === "Bacon"
  }))

  const appleIndex = recipeList.indexOf(recipeList.find( (item) => {
    return item.category === "Apple"
  }))

  const avocadoIndex = recipeList.indexOf(recipeList.find( (item) => {
    return item.category === "Avocado"
  }))

  console.log(recipeList[baconIndex].category)

  return (
    <section className="buttonCategory">
      <h3 className="buttonCategory__title">Categorías</h3>
      <div className="buttonCategory__buttons">
        <Link to={`/home/category/${recipeList[baconIndex].category}`}>
          <CategoryCard {...recipeList[baconIndex]}/>
        </Link>
        <Link to={`/home/category/${recipeList[appleIndex].category}`}>
          <CategoryCard {...recipeList[appleIndex]}/>
        </Link>
        <Link to={`/home/category/${recipeList[avocadoIndex].category}`}>
          <CategoryCard {...recipeList[avocadoIndex]}/>
        </Link>
      </div>
    </section>
  )
}

export default ButtonCategory;
