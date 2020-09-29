// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { FaRegHeart, FaPlus, FaSearch } from 'react-icons/fa';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the searchbar. is in the searchbar hero.
const SearchBar = () => {
	return (
		<div className="Search-bar">
			<input
				className="Search-bar__input"
				type="text"
				placeholder="Busca una receta"
			/>
			<FaSearch className="icon--search" />
		</div>
	);
};

export default SearchBar;
