//------------------------------ import libraries
import React from 'react';

//------------------------------ import styles and images
import '../assets/components-style/Recommendation.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the user recommendation card in landing page.
const RecommendationCard = ({ image, userName }) => {
	return (
		<div className="RecommendationCard">
			<img className="RecommendationCard__img" src={image} alt={userName} />
			<h3 className="RecommendationCard__title">{userName}</h3>
			<p className="RecommendationCard__text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
				odit quos nostrum eius illum adipisci!
			</p>
		</div>
	);
};

export default RecommendationCard;
