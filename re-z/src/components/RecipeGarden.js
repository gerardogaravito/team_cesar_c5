import React from 'react';

import './styles/RecipeGarden.css'
import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';
import Button from './Button';

class RecipeGarden extends React.Component {
  render () {
    return (
      <div className="gardenContainer">
        <div className="gardenContainer__head">
          <div className="gardenContainer__head--title">Lorem Ipsum 50</div>
          <Button text='Ver más' />
        </div>
        <div className="gardenContainer__vertical">
          <RecipeCardVerticalSimple/>
        </div>
        <div className="gardenContainer__square1">
          <RecipeCardSquareSimple/>
        </div>
        <div className="gardenContainer__square2">
          <RecipeCardSquareSimple/>
        </div>
        <div className="gardenContainer__horizontal">
          <RecipeCardHorizontalSimple/>
        </div>
      </div>
      )
    }
}

export default RecipeGarden;