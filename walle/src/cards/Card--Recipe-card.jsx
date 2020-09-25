// ------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ------------------------------ import components
import { FaRegHeart, FaUsers, FaClock, FaPlus, FaTimes } from 'react-icons/fa';

// -------- import redux actions
import {
	addFavoriteRecipe,
	deleteFavoriteRecipe,
} from '../actions/usersActions';
import { getCartIngredients } from '../actions/recipeActions';

// ------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the recipe card component. it is used in recipe carrousel.
// here are the actions and functions to add, delete favorite and add ingredients to cart
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

	// this function get the addFavoriteRecipe action and send the data needed to render this card as payload. this action save this object in userReducer.
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

	// this function get the id of the selected card and send it to the action deleteFavoriteRecipe and filter from the favorite key in userReducer
	const deleteFavorite = (id) => {
		dispatch(deleteFavoriteRecipe(id));
	};

	// this function get the id of the selected card and send it to the action getCartIngredients. this action will get the ingredients in the recipe and stored them in cartIngredients key of recipeReducer.
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
			{/* this validate if is in favorite list, show the 'X' button to delete from favorite, if not show the heart button */}
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
