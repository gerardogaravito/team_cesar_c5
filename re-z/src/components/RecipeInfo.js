import React from 'react';
import { useDispatch } from 'react-redux';

import './styles/RecipeInfo.css';
import Button from './Button';
import CookTime from '../Animation/CookTime';
import { Link } from 'react-router-dom';
import { addCartIngredient } from '../actions'
import RecipeIngredient from './Ingredient/RecipeIngredient';

function RecipeInfo (props){

    const dispatch = useDispatch()

    const handleAddCart = (props) => {
        dispatch(addCartIngredient(props.data.ingredients))
    }

    // se obtenien los ingredientes del local storage y se almacenan en una variable
    const ingredientsLocalStorage = JSON.parse( localStorage.getItem("ingredients"))

    // se obtienen solo los ingredientes de la receta en cuestion
    const ingredients = ingredientsLocalStorage.filter( (item) => {
        return item.Recipe === props.data.id
    })


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
                        <p>{props.data.porstions}</p>
                    </div>
                </div>
                    <div className="Recipe-info-ingredient">
                        <p className="recipe-info-texto">Ingredientes:</p>
                        {
                            ingredients.map( (item) => (
                                <RecipeIngredient data={item} key={item.id}/>
                            ))
                        }
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