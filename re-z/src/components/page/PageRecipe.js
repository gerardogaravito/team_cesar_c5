import React from 'react';

import Navbar from '../Navbar';
import RecipeInfoPage from '../RecipeInfoPage';


class PageRecipe extends React.Component{
  render(){
      return (
            <div>
                <Navbar />
                <RecipeInfoPage/>
            </div>
      )
  }
}

export default PageRecipe; 