import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

import './styles/RecipeInfo.css';
import Button from './Button';
import RecipeIngredientsList from '../components/Ingredient/RecipeIngredientList';
import CookTime from '../Animation/CookTime';
import { Link } from 'react-router-dom';
import { addCartIngredient } from '../actions'

function RecipeInfo (props){

    const dispatch = useDispatch()

    const handleAddCart = (props) => {
        dispatch(addCartIngredient(props.data.ingredients))
    }

    return(
        <div className="Recipe__Information">
            <div className="Recipe__Information-container">
                <h1>{props.data.name}</h1>
                <div className="Recipe-info">
                    <div className="Recipe-info-Time">
                        <p>Tiempo estimado de preparación:</p>
                        <div className="Time-icon">
                            <CookTime />
                            <p>{props.data.preparationTime} min</p>
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
                    <img src={props.data.img_url} alt="food"/>
                </div>
                <div className="Recipe__Information-button">
                    <Link to={`/home/PaymentPage/${props.data.id}`}>
                        <Button text='Agregar al carrito' onClick={handleAddCart} />
                    </Link>
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