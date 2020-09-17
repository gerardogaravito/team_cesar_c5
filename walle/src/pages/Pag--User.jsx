//------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

//------------------------------ import components
import Header from '../components/Com--Header';
import UserInfo from '../components/Com--User-info';
import RecipeCarrousel from '../components/Com--Recipe-carrousel';
import Footer from '../components/Com--Footer';
import RecipeCard from '../cards/Card--Recipe-card';

//------------------------------ import styles and images
import '../assets/components-style/Layout.scss';

//------------------------------------ COMPONENT ------------------------------------//
const UserPage = () => {
	const favorites = useSelector((state) => state.userReducer.favorites);

	return (
		<div className="Layout">
			<div className="Layout__container">
				<Header />
			</div>
			<div className="Layout__body">
				<UserInfo
					userName="Pepita Perez"
					email="pepitaperez@email.com"
					phone="+57 3004486870"
				/>
				<RecipeCarrousel title="Favoritos">
					{favorites.map((recipe, i = 0) => {
						i++;
						return (
							<RecipeCard
								id={recipe.id}
								cardId={i}
								key={recipe.id}
								picture={recipe.picture}
								name={recipe.name}
								portions={recipe.portions}
								preparationTime={recipe.preparationTime}
								dificult={recipe.dificult}
							/>
						);
					})}
				</RecipeCarrousel>

				<RecipeCarrousel title="Compradas recientemente" />
			</div>
			<Footer />
		</div>
	);
};

export default UserPage;
