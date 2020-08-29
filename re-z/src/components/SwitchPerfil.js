import React, { Component } from 'react';

import './styles/SwitchPerfil.css';
import CloseBtn from "../images/Atomos/close-icon.svg";
import Avatar from "../images/Atomos/Avatar.svg";

class Modal extends Component{
    render(){
        return(
            <section>
            <div className="close-btn">
                <button onClick={this.props.onClose}>
                    <img src={CloseBtn} alt="Close-Button"/>
                </button>
            </div>
          <div className="perfilMenu">
              <a href="">Configuración</a>
              <a href="">Tus Favoritas</a>
              <a href="">Ver carrito de compra</a>
              <a href="">Cerrar sesión</a>
          </div>
          </section>
        )
    }
}

class SwitchPerfil extends React.Component {
    state = {isModalOpen: false}
    _openModal = () => this.setState({isModalOpen: true})
    _closeModal = () => this.setState({isModalOpen: false})

    render() {
      return (
         <level className="SwtchContainer">

            <div className="perfil-btn" onClick={this._openModal}>
                <img src={Avatar} alt="Avatar"/>
            </div>
            {this.state.isModalOpen && 
                <Modal onClose={this._closeModal}/>
            }
           
         </level>   
      )     
    }
  }



 export default SwitchPerfil;
/*  <input type="checkbox" name="" onClick={this._openModal}></input>
 {this.state.isModalOpen && 
     <Modal onClose={this._closeModal}/>
 } */