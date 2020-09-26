import React from 'react';

import './styles/RecipeGarden.css'
import Button from './Button';
import GridRecipe from './GridRecipe'

const RecipeGarden = ({title,name}) => {
    return (
      <div className="gardenContainer">
        <div className="gardenContainer__head">
          <div className="gardenContainer__head--title">{title}</div>
          <Button text={name} />
        </div>
        <div>
          <GridRecipe />
        </div>
      </div>
      )
}

export default RecipeGarden;