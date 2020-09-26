import React from 'react';

import './styles/RecipeGarden.css'
import Button from './Button';
import GridRecipe from './GridRecipe'

class RecipeGarden extends React.Component {
  render () {
    return (
      <div className="gardenContainer">
        <div className="gardenContainer__head">
          <div className="gardenContainer__head--title">Lorem Ipsum 50</div>
          <Button text='Ver más' />
        </div>
        <div>
          <GridRecipe />
        </div>
        
      </div>
      )
    }
}

export default RecipeGarden;