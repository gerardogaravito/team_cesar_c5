import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchRecipe } from '../hooks/useFetchRecipe';

import './styles/ButtonCategory.css';

import Button from './Button'
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

  return (
    <section className="buttonCategory">
      <h3 className="buttonCategory__title">Categorías</h3>
      <div className="buttonCategory__buttons">
        <Link to={`/home/category/${recipeList[baconIndex].category}`}>
          <Button text='Bacon'/>
        </Link>
        <Link to={`/home/category/${recipeList[appleIndex].category}`}>
          <Button text='Apple'/>
        </Link>
        <Link to={`/home/category/${recipeList[avocadoIndex].category}`}>
          <Button text='Avocado'/>
        </Link>
      </div>
    </section>
  )
}

export default ButtonCategory;
