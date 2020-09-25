// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this component return the category card in landing page. it inherit a function from props.handleClick
const CategoryCard = ({ handleClick, picture, name }) => {
	return (
		<div onClick={handleClick}>
			<div className="Category-card">
				<img className="Category-card__img" src={picture} alt={name} />
				<p className="Category-card__name">{name}</p>
			</div>
		</div>
	);
};

export default CategoryCard;
