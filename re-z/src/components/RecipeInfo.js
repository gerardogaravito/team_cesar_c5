import React from 'react';
import { useSelector } from 'react-redux';


import './styles/RecipeInfo.css';
import Button from './Button';
import TimeIcon from '../images/Atomos/time-icon-yellow.svg';
import RecipeIngredientsList from '../components/Ingredient/RecipeIngredientList';


function RecipeInfo (props){

        return(
            <div className="Recipe__Information">
                <div className="Recipe__Information-container">
                    <h1>{props.data.name}</h1>
                    <div className="Recipe-info">
                        <div className="Recipe-info-Time">
                            <p>Tiempo estimado de preparación:</p>
                            <div className="Time-icon">
                                <img src={TimeIcon} alt="Icon" />
                                <p>{props.data.preparationTime}</p>
                            </div>
                        </div>
                        <div className="Recipe-info-complexity">
                            <p>Nivel de complejidad:</p>
                             <p>{props.data.dificult}</p>
                        </div>
                        <div className="Recipe-info-Portion">
                            <p>Porciones:</p>
                             <p>{props.data.portions}</p>
                        </div>
                        <div className="Recipe-info-ingredient">
                            <p>Ingredientes:</p>
                            <RecipeIngredientsList />
                        </div>
                    </div>
                    <div className="Recipe__Information-image">
                        <img src={props.data.picture} alt="food"/>
                    </div>
                    <div className="Recipe__Information-button">
                        <Button text='Agregar al carrito'/>
                    </div>
                </div>
                <div className="Recipe__Information-description">
                    <h1>Instrucciones</h1>
                    <p>{props.data.instructions}</p>
                </div>
            </div>
        )
    }
                            
export default RecipeInfo;