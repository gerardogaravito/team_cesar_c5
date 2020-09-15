//------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//------------------------------ import components
import { FaRegHeart, FaUsers, FaClock, FaPlus } from 'react-icons/fa';
import { addFavoriteRecipe } from '../actions/usersActions';
import { getCartIngredients } from '../actions/recipeActions';

//------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

const RecipeCard = ({ id, cardId, name, image, portions, time, difficult }) => {
	const dispatch = useDispatch();

	const addFavorite = () => {
		dispatch(addFavoriteRecipe({ id, name, image, portions, time, difficult }));
	};

	const addCart = () => {
		dispatch(getCartIngredients(id));
	};

	return (
		<div className={`RecipeCard recipe-card${cardId}`}>
			<Link className="RecipeCard__container" to={`/receta/${id}`}>
				<img className="RecipeCard__img" src={image} alt={name} />
				<div className="RecipeCard__head">
					<p className="RecipeCard__name">{name}</p>
				</div>
				<div className="RecipeCard__foot">
					<div className="recipe-button">
						<p>{portions}</p>
						<FaUsers />
					</div>
					<div className="recipe-button">
						<p>{time} min</p>
						<FaClock />
					</div>
					<div className="recipe-button">{difficult}</div>
				</div>
			</Link>
			<FaRegHeart
				className="icon--inactive RecipeCard__fav"
				onClick={addFavorite}
			/>
			<FaPlus className="icon--add" onClick={addCart} />
		</div>
	);
};

export default RecipeCard;
