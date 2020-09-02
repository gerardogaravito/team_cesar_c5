//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import { FaSearch } from "react-icons/fa";

//------------------------------ import styles and images
import "../global-styles/icons.scss";

const SearchBar = () => {
  return (
    <Fragment>
      <div className="Search-bar">
        <input
          className="Search-bar__input"
          type="text"
          placeholder="Busca una receta"
        />
        <FaSearch className="icon--search" />
      </div>
    </Fragment>
  );
};

export default SearchBar;
