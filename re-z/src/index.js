import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

import Button from './components/Button'
import RecipeCardHorizontalSimple from './components/RecipeCardHorizontalSimple'

// ---las librerías de abajo venían con create-react-app, aun no las sé usar entonces las comenté---
// import App from './App';
// import * as serviceWorker from './serviceWorker';



const container = document.getElementById('app');

// ReactDOM.render( qué, dónde)
// ReactDOM.render( <elemento/>, dónde)
ReactDOM.render(<Button/>, container);