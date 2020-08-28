import React from 'react';

import './styles/SwitchPerfil.css';
/* import Avatar from '../images/Atomos/Avatar.svg' */
/* import logoFacebook from '../images/Atomos/Facebook-icon.svg';
import logoTwitter from '../images/Atomos/Twitter-icon.svg'; */

class SwitchPerfil extends React.Component {
    render() {
      return (
         <div className="SwtchContainer">
              <input type="checkbox" name=""></input>
            <div className="perfilMenu">
                <a href="">Configuración</a>
                <a href="">Tus Favoritas</a>
                <a href="">ver carrito de compra</a>
                <a href="">Cerrar sesión</a>
            </div>
         </div>
         
        
      )     
    }
  }
  
  
  export default SwitchPerfil;
