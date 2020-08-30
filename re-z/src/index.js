import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
// import fotoComida from './images/fotoComida.png'

/* import Button from './components/Button' */
import SwitchPerfil from "./components/SwitchPerfil"
import RecipeCardHorizontalSimple from './components/RecipeCardHorizontalSimple'
/* import FooterA from './components/FooterA' */
/* import RecipeCardHorizontalDerecha from './components/RecipeCardHorizontalDerecha'
import Switch from './components/SwitchPerfil';
 */
import Search from './components/Search'
import Navbar from "./components/Navbar"
import Home from "./components/page/Home"


const container = document.getElementById('app');

// ReactDOM.render( qué, dónde)
// ReactDOM.render( <elemento/>, dónde)
// ReactDOM.render(<RecipeCardHorizontalSimple 
//   recipeTitle='Lorem Ipsum 36'
//   // fotoComida={fotoComida }
//   />,
//   container
// );

/* ReactDOM.render(<SwitchPerfil/>, container); */
/* ReactDOM.render(<Button/>, container); */
/* ReactDOM.render(<FooterA/>, container); */
/* ReactDOM.render(<Search/>, container); */
/* ReactDOM.render(<Navbar/>, container); */
ReactDOM.render(<Home/>, container);
