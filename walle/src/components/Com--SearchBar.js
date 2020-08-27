//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components
import { FaSearch } from "react-icons/fa";

//------------------------------ import styles and images
import "../global-styles/icons.scss";

class SearchBar extends Component {
  render() {
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
  }
}

export default SearchBar;
