import React from 'react';

import RecipeCardHorizontalSimple from './RecipeCardHorizontalSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple';
import RecipeCardSquareSimple from './RecipeCardSquareSimple';

class RecipeGarden extends React.Component {
  render () {
    return (
      <div className="gardenContainer">
        <RecipeCardHorizontalSimple/>
        <RecipeCardVerticalSimple/>
        <RecipeCardSquareSimple/>
      </div>
      )
    }
}

export default RecipeGarden;