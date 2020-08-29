import React, { Component } from 'react';

import './styles/Search.css';
import Searchicon from "../images/Atomos/search-icon.svg";
import CloseIcon from "../images/Atomos/close-icon.svg";
class Searchinput extends Component{
    render(){
        return(
          <div className="search-input">
                <input type="text" placeholder="¿Qué estas buscando?" name="search"/>
                <img src={CloseIcon} alt="Close" onClick={this.props.onClose}/> 
          </div>
        )
    }
}
 class Search extends React.Component {
    state = {isModalOpen: false}

    _openModal = () => this.setState({ isModalOpen:true })
    _closeModal = () => this.setState({ isModalOpen:false })

    render() {
      return (
        <div className="Search-icon">
            <button name="" onClick={this._openModal}>
                <img src={Searchicon} alt="Search"/>
            </button>
            {this.state.isModalOpen &&
                <Searchinput onClose={this._closeModal}/> 
            }
        </div> 
      );
    }
  }
  export default Search;
