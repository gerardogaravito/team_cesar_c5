import React, { Component } from 'react';
import { Prompt } from 'react-router';

import './styles/Search.css';
import Searchicon from "../images/Atomos/search-icon.svg";
import CloseIcon from "../images/Atomos/close-icon.svg";


class Searchinput extends Component{
    render(){
        return(
          <React.Fragment>  
          <div className="search-input">
                <input type="text" placeholder="¿Qué estás buscando?" name="search"/>
                <img src={CloseIcon} alt="Close" onClick={this.props.onClose}/> 
          </div>
          <Prompt //1 reccomiendan when={props.value}
            when={this.props.prompt} //1 Todo lo que tiene número es para el mensaje de advertencia que aun no logro que funcione y preguntaré a César
            message='Estás seguro de querer dejar la página?'
          />
          </React.Fragment>
        )
    }
}
class Search extends React.Component {
    state = {
      isModalOpen: false,
      value: '', //3
      prompt: false, //3
    }

    _openModal = () => this.setState({ isModalOpen:true })
    _closeModal = () => this.setState({ isModalOpen:false })

    handleInputChange = (event) => { //4
      this.setState({
        value: event.target.value.replace(' ','-'), //4
        prompt: !!(event.target.value.lenght), //4
      })
    }

    render() {
      return (
        <div className="Search-icon">
            <button name="" onClick={this._openModal}>
                <img src={Searchicon} alt="Search"/>
            </button>
            {this.state.isModalOpen &&
                <Searchinput 
                  onClose={this._closeModal}
                  value={this.state.value} // 2
                  prompt={this.state.prompt} //2
                />
            }
        </div> 
      );
    }
  }
  export default Search;
