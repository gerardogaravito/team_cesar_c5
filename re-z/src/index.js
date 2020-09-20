//DEPENDENCIAS
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';

import './global.css';
import App from './components/App';

const store = createStore(
    reducers, //todos los reducer
    {} //estado inicial
);

//COMPONENTES

//Para cuando queramos renderiar todo el sitio con App


/* import NavegationLanding from './components/NavegationLanding'; */
// ---las librerías de abajo venían con create-react-app, aun no las sé usar entonces las comenté---
// import * as serviceWorker from './serviceWorker';

const container = document.getElementById('app');

// ReactDOM.render( qué, dónde)
// ReactDOM.render( <elemento/>, dónde)

//Para cuando queramos renderizar todo el sitio con App.js
 ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider> 
    ,container)
