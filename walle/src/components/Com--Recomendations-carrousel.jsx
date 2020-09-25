// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import RecommendationCard from '../cards/Card--Recomendation';

// ------------------------------ import styles and images
import '../assets/components-style/Recommendation.scss';
import userPicture from '../assets/images/userpic.jpg';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the users recomendation carrousel
const RecommendationCarrousel = () => {
	return (
		<div className="Recommendation-carrousel">
			<h2 className="Recommendation-carrousel__title">Ellos recomiendan</h2>
			<div className="Recommendation-carrousel__container">
				<RecommendationCard image={userPicture} userName="Pepita Perez" />
				<RecommendationCard image={userPicture} userName="Pepita Perez" />
				<RecommendationCard image={userPicture} userName="Pepita Perez" />
				<RecommendationCard image={userPicture} userName="Pepita Perez" />
				<RecommendationCard image={userPicture} userName="Pepita Perez" />
			</div>
		</div>
	);
};

export default RecommendationCarrousel;
