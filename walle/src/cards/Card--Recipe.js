//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import { FaRegHeart, FaUsers, FaClock, FaPlus } from "react-icons/fa";

//------------------------------ import styles and images
import "./styles/Recipecard.scss";

const RecipeCard = (props) => {
  return (
    <Fragment>
      <div className={`RecipeCard ${props.card}`}>
        <img className="RecipeCard__img" src={props.image} alt={props.name} />
        <div className="RecipeCard__head">
          <p className="RecipeCard__name">{props.name}</p>
          <FaRegHeart className="icon--inactive RecipeCard__fav" />
        </div>
        <FaPlus className="icon--add" />
        <div className="RecipeCard__foot">
          <div className="recipe-button">
            <p>{props.portions}</p>
            <FaUsers />
          </div>
          <div className="recipe-button">
            <p>{props.time}min</p>
            <FaClock />
          </div>
          <div className="recipe-button">{props.difficult}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeCard;
