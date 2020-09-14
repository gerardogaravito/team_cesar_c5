//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import { FaSearch } from "react-icons/fa";

//------------------------------------ COMPONENT ------------------------------------//
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
