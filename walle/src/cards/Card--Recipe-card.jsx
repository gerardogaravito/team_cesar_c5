//------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//------------------------------ import components
import { FaRegHeart, FaUsers, FaClock, FaPlus, FaTimes } from 'react-icons/fa';
import {
	addFavoriteRecipe,
	deleteFavoriteRecipe,
} from '../actions/usersActions';
import { getCartIngredients } from '../actions/recipeActions';

//------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

const RecipeCard = ({
	id,
	cardId,
	name,
	picture,
	portions,
	preparationTime,
	dificult,
	isFavorite,
}) => {
	const dispatch = useDispatch();

	const addFavorite = () => {
		dispatch(
			addFavoriteRecipe({
				id,
				name,
				picture,
				portions,
				preparationTime,
				dificult,
			})
		);
	};

	const deleteFavorite = (id) => {
		dispatch(deleteFavoriteRecipe(id));
	};

	const addCart = (id) => {
		dispatch(getCartIngredients(id));
	};

	return (
		<div className={`RecipeCard recipe-card${cardId}`}>
			<Link className="RecipeCard__container" to={`/receta/${id}`}>
				<img className="RecipeCard__img" src={picture} alt={name} />
				<div className="RecipeCard__head">
					<p className="RecipeCard__name">{name}</p>
				</div>
				<div className="RecipeCard__foot">
					<div className="recipe-button">
						<p>{portions}</p>
						<FaUsers />
					</div>
					<div className="recipe-button">
						<p>{preparationTime} min</p>
						<FaClock />
					</div>
					<div className="recipe-button">{dificult}</div>
				</div>
			</Link>
			{isFavorite ? (
				<FaTimes
					className="icon--inactive RecipeCard__fav"
					onClick={() => deleteFavorite(id)}
				/>
			) : (
				<FaRegHeart
					className="icon--inactive RecipeCard__fav"
					onClick={addFavorite}
				/>
			)}
			<FaPlus className="icon--add" onClick={() => addCart(id)} />
		</div>
	);
};

export default RecipeCard;
