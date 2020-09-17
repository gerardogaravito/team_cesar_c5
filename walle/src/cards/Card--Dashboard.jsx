//------------------------------ import libraries
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

const DashboardCard = ({ id, cardPosition, image, name }) => {
	return (
		<Fragment>
			<Link
				className={`CardDashboard card${cardPosition}`}
				to={`/receta/${id}`}
			>
				<img className="CardDashboard__img" src={image} alt={name} />
				<p className="CardDashboard__name">{name}</p>
			</Link>
		</Fragment>
	);
};

export default DashboardCard;
