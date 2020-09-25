// ------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom';

// ------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the card displayed in landing dashboard.
// the prop cardPosition is the number of the position in dashboard grid container.
// it has a link component that go to the specific recipe page.
const DashboardCard = ({ id, cardPosition, image, name }) => {
	return (
		<Link className={`CardDashboard card${cardPosition}`} to={`/receta/${id}`}>
			<img className="CardDashboard__img" src={image} alt={name} />
			<p className="CardDashboard__name">{name}</p>
		</Link>
	);
};

export default DashboardCard;
