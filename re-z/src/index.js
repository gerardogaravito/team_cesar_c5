//DEPENDENCIAS
import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTES
import './global.css';
import RecipeCardSquare from './components/RecipeCardSquare'
//import Button from './components/Button' */
//import SwitchPerfil from "./components/SwitchPerfil"
//import RecipeCardHorizontalSimple from './components/RecipeCardHorizontalSimple'
//import FooterA from './components/FooterA' */
import RecipeCardHorizontalDerecha from './components/RecipeCardHorizontalDerecha'
import RecipeCardHorizontalIzquierda from './components/RecipeCardHorizontalIzquierda'
import CardVerticalScroll from './components/CardVerticalScroll'
import Landing from './components/page/Landing'
import RecipeGarden from './components/RecipeGarden'
//import Switch from './components/SwitchPerfil';*/
//import Search from './components/Search'

import RecipeCardVerticalSimple from './components/RecipeCardVerticalSimple'
//Para cuando queramos renderiar todo el sitio con App
import App from './components/App';
import Button from './components/Button';
/* import NavegationLanding from './components/NavegationLanding'; */


// ---las librerías de abajo venían con create-react-app, aun no las sé usar entonces las comenté---
// import * as serviceWorker from './serviceWorker';



const container = document.getElementById('app');


// ReactDOM.render( qué, dónde)
// ReactDOM.render( <elemento/>, dónde)


/* ReactDOM.render(<CarruselHome />,container) */

//Para cuando queramos renderizar todo el sitio con App.js
 ReactDOM.render(<RecipeGarden />,container)
