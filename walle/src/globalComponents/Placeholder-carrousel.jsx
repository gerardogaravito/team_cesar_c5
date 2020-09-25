// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import PlaceholderCard from './Placeholder-card';

// ------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the carrousel to show it instead of recipeCarrousel
const PlaceholderCarrousel = ({ title }) => {
	return (
		<div className="Recipe-carrousel">
			<h2 className="Recipe-carrousel__title">{title}</h2>
			<div className="Recipe-carrousel__cards-container">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<PlaceholderCard cardId={item} key={item} />
				))}
			</div>
		</div>
	);
};

export default PlaceholderCarrousel;
