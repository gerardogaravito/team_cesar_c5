import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import RecipeCardSquareSimple from './RecipeCardSquareSimple';
import RecipeCardVerticalSimple from './RecipeCardVerticalSimple'

function App() {
  return (
    <BrowserRouter>
      <div>
        <RecipeCardSquareSimple name="Lorem Ipsum 36"/>
        <RecipeCardVerticalSimple name="Lorem Ipsum 36"/>
      </div>
    </BrowserRouter>
  );
}

export default App;