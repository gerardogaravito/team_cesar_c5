import React, { Component } from 'react';

import './styles/Search.css';
import Searchicon from "../images/Atomos/search-icon.svg";
import CloseIcon from "../images/Atomos/close-icon.svg";
class Searchinput extends Component{
    render(){
        return(
          <div className="search-input">
                <input type="text" placeholder="¿Qué estas buscando?" name="search"/>
                <img src={CloseIcon} alt="Close"/> 
          </div>
        )
    }
}
 class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() {
      return (
        <section className="Search-icon">
            <button type="checkbox" name="" onClick={this.handleClick}>
                <img src={Searchicon} alt="Search"/>
            </button>
            {this.state.isToggleOn ? '' : <Searchinput/>}
        </section> 
      );
    }
  }
  export default Search;