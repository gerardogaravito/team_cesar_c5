//------------------------------ import libraries
import React from 'react';

//------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

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
