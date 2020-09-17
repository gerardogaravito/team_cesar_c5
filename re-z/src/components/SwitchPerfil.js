import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/SwitchPerfil.css';

class Modal extends Component{
    render(){
        return(
            <section>
              <div className="perfilMenu">
                  <a href="">Configuración</a>
                  <Link to="/home/favoritos">Tus Favoritas</Link>
                  <a href="">Ver carrito de compra</a>
                  <Link to="/home/landing">Cerrar Sesión</Link>
              </div>
          </section>
        )
    }
}
class SwitchPerfil extends React.Component {
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
        <level className="SwtchContainer">
        <input type="checkbox" name="" onClick={this.handleClick}></input>
        {this.state.isToggleOn ? '' : <Modal onClose={this._closeModal}/>}
        </level> 
      );
    }
  }
  export default SwitchPerfil;