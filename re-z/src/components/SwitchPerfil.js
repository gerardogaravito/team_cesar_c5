import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/SwitchPerfil.css';

class Modal extends Component{
    render(){
        return(
            <section>
              <div className="perfilMenu">
                  <Link to="/home/configuration">Configuración</Link>
                  <Link to="/home/favoritos">Tus Favoritas</Link>
                  <Link to="/home/PaymentPage">Ver carrito de compra</Link>
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
        <section className="SwtchContainer">
        <input type="checkbox" name="" onClick={this.handleClick}></input>
        {this.state.isToggleOn ? '' : <Modal onClose={this._closeModal}/>}
        </section> 
      );
    }
  }
  export default SwitchPerfil;