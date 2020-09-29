import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFetchRecipe } from '../../hooks/useFetchRecipe';

import Navbar from '../Navbar'
import data from '../../../recipe.json'
import RecipeCardHorizontalSimple from '../RecipeCardHorizontalSimple';

import '../styles/Category.css'


const Category = () => {

  const {myCategory} = useParams();
  const [recipeList] = useFetchRecipe(data.recipes);
  const recipe = recipeList.filter(item => item.category === `${myCategory}`);
  
  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])

  return(
    <React.Fragment >
    <div className="Home-container">
        <Navbar />
        <div className="Favoritos-container">
          <h1 className="favoritos__title">{recipe[0].category}</h1> 
        </div>
    </div>
    <section className="category__list">
      {
        recipe.map((item) => (
          <React.Fragment >
            <RecipeCardHorizontalSimple data={item} key={item.id}/>
          </React.Fragment>
        ))
      }
    </section>
  </React.Fragment>
  )
}

export default Category;