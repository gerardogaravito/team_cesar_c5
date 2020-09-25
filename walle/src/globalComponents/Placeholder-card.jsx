// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { FaInbox } from 'react-icons/fa';

// ------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this is a placeholder card to show when there is no recipe card
const PlaceholderCard = ({ cardId }) => {
	return (
		<div className={`Placeholder-card recipe-card${cardId}`}>
			<div className="Placeholder-card__container">
				<FaInbox size="40px" />
				<h4>Todavía no hay recetas</h4>
			</div>
		</div>
	);
};

export default PlaceholderCard;
