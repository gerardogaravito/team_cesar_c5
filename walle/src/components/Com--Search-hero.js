//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components
import HeaderHome from "./Com--Header-home";
import SearchBar from "./Com--SearchBar";

//------------------------------ import styles and images
import "./styles/Heros.scss";
import "./styles/Searchbar.scss";

class SearchHero extends Component {
  render() {
    return (
      <Fragment>
        <section className="Hero">
          <HeaderHome />
          <div className="Hero__search">
            <h1 className="Hero__title">Walle</h1>
            <SearchBar />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SearchHero;
