import React, { Component } from 'react';

import './styles/SwitchPerfil.css';

class Modal extends Component{
    render(){
        return(
            <section>
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