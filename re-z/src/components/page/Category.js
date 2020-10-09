import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar'
import RecipeCardHorizontalSimple from '../RecipeCardHorizontalSimple';

import '../styles/Category.css'


const Category = () => {

  
  const {myCategory} = useParams();
  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))
  const recipe = recipesLocalStorage.filter(item => item.category === `${myCategory}`);
  
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