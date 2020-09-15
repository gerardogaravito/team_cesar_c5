//------------------------------ import libraries
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//------------------------------ import components
import { FaRegHeart, FaUsers, FaClock, FaPlus } from 'react-icons/fa';

//------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

const RecipeCard = ({ id, cardId, name, image, portions, time, difficult }) => {
	return (
		<Fragment>
			<Link className={`RecipeCard recipe-card${cardId}`} to={`/receta/${id}`}>
				<img className="RecipeCard__img" src={image} alt={name} />
				<div className="RecipeCard__head">
					<p className="RecipeCard__name">{name}</p>
					<FaRegHeart className="icon--inactive RecipeCard__fav" />
				</div>
				<FaPlus className="icon--add" />
				<div className="RecipeCard__foot">
					<div className="recipe-button">
						<p>{portions}</p>
						<FaUsers />
					</div>
					<div className="recipe-button">
						<p>{time}min</p>
						<FaClock />
					</div>
					<div className="recipe-button">{difficult}</div>
				</div>
			</Link>
		</Fragment>
	);
};

export default RecipeCard;
