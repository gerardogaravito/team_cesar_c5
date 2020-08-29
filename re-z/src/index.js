import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

/* import Button from './components/Button' */
import SwitchPerfil from "./components/SwitchPerfil"
import RecipeCardHorizontalSimple from './components/RecipeCardHorizontalSimple'
/* import FooterA from './components/FooterA' */
/* import RecipeCardHorizontalDerecha from './components/RecipeCardHorizontalDerecha'
import Switch from './components/SwitchPerfil';
 */
import Search from './components/Search'
// ---las librerías de abajo venían con create-react-app, aun no las sé usar entonces las comenté---
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Navbar from "./components/Navbar"


const container = document.getElementById('app');

// ReactDOM.render( qué, dónde)
// ReactDOM.render( <elemento/>, dónde)

/* ReactDOM.render(<SwitchPerfil/>, container); */
/* ReactDOM.render(<Button/>, container); */
/* ReactDOM.render(<FooterA/>, container); */
/* ReactDOM.render(<Search/>, container); */
ReactDOM.render(<Navbar/>, container);