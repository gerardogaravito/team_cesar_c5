import React from 'react';

import './styles/RecipeInformationStyles.css';
import Button from './Button';
import RecipeImage from '../images/Photo-food.png';

class RecipeInfoPage extends React.Component{
    handleClick = e => {
        console.log('Button was clicked');
        this.setState({redirect: true}); // agregar aquí la dirección correcta al carrito
      };

    
    render(){
        return(
            <div className="Recipe__Information">
                <div className="Recipe__Information-container">
                    <h1>Recipe Name</h1>
                    <div className="Recipe-info">
                        <div className="Recipe-info-Time">
                            <p>Tiempo estimado de preparación</p>
                        </div>
                        <div className="Recipe-info-complexity">
                            <p>Nivel de complejidad</p>
                        </div>
                        <div className="Recipe-info-Portion">
                            <p>Porciones</p>
                        </div>
                        <div className="Recipe-info-ingredient">
                            <p>Ingredientes</p>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Recipe__Information-image">
                        <img src={RecipeImage} alt="food"/>
                    </div>
                    <div className="Recipe__Information-button">
                        <Button text='Agregar al carrito' onClick={this.handleClick}/>
                    </div>
                </div>
                <div className="Recipe__Information-description">
                    <h1>Instrucciones</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                </div>
            </div>
        )
    }
}

export default RecipeInfoPage;