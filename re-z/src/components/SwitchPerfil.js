import React from 'react';

import './styles/SwitchPerfil.css';
import Avatar from '../images/Atomos/Avatar.svg'
/* import logoFacebook from '../images/Atomos/Facebook-icon.svg';
import logoTwitter from '../images/Atomos/Twitter-icon.svg'; */

class SwitchPerfil extends React.Component {
    render() {
      return (
         <div className="SwtchContainer">
             <img src={Avatar} alt="Avatar"/>
             <input type="checkbox" name=""></input>
         </div>
      )     
    }
  }
  
  export default SwitchPerfil;
