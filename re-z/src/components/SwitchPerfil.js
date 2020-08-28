import React, { Component } from 'react';

import './styles/SwitchPerfil.css';
/* import Avatar from '../images/Atomos/Avatar.svg' */
/* import logoFacebook from '../images/Atomos/Facebook-icon.svg';
import logoTwitter from '../images/Atomos/Twitter-icon.svg'; */

class Modal extends Component{
    render(){
        return(
          <div className="perfilMenu">
              <a href="">Configuración</a>
              <a href="">Tus Favoritas</a>
              <a href="">Ver carrito de compra</a>
              <a href="">Cerrar sesión</a>
          </div>
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
              <input type="checkbox" name="" onClick={this._openModal}></input>
            {this.state.isModalOpen && 
                <Modal onClose={this._closeModal}/>
            }
         </level>   
      )     
    }
  }
  
  

  export default SwitchPerfil;


  {/* <img src={Avatar} alt="Avatar"/> */}