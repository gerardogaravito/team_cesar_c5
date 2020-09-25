// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import Header from './Com--Header';
import SearchBar from './Com--SearchBar';

// ------------------------------ import styles and images
import '../assets/components-style/Hero.scss';
import heroPic from '../assets/images/hero-img.jpeg';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the hero with the searchbar. is in home and cart pages.
const SearchHero = ({ name }) => {
	return (
		<section className="Hero">
			<img src={heroPic} alt="" className="Hero__img" />
			<Header />
			<div className="Hero__search">
				<h1>{name}</h1>
				<SearchBar />
			</div>
		</section>
	);
};

export default SearchHero;
