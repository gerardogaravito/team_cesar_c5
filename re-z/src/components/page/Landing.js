import React from 'react';
import ReactPlayer from 'react-player'

import '../styles/Landing.css';
import NavBarLanding from '../NavBarLanding'
import CardVerticalScroll from '../CardVerticalScroll';
import RecipeCardSquare from '../RecipeCardSquare';
import RecipeGarden from '../RecipeGarden';
import GridRecipe from '../GridRecipe';
import GridRecipeInvert from '../GridRecipeInvert';
import {recipes} from '../../../recipe.json'

class Landing extends React.Component {

  componentDidMount() {
    window.scroll(0, 0);//esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
  }

  render () {
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
                  playing= 'true'
                  loop
                  muted/>
                </div>
                <div className="landing__recipes">
                  <CardVerticalScroll />
                </div>
              </div>

              <div className="landing__container-secundary">
                {
                  recipes.slice(0,3).map(recipe=>(
                    <RecipeCardSquare
                    key={recipe.id}
                    name={recipe.name}
                    id={recipe.id}
                    picture={recipe.picture}
                    preparationTime={recipe.preparationTime}
                    instructions={recipe.instructions}
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
}

export default Landing