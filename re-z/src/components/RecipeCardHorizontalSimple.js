import React from 'react';

import fotoComida from '../images/fotoComida.jpg';

class RecipeCardHorizontalSimple extends React.Component {
  render() {
    return <div>
      <img src={fotoComida} alt="Foto de Comida"/>
      <h1>Lorem Ipsum 36</h1>
    </div>
  }
}

export default RecipeCardHorizontalSimple;