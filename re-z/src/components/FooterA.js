import React from 'react';

import './styles/FooterA.css';
import logoInstagram from '../images/Atomos/Instagram-icon.svg';
import logoFacebook from '../images/Atomos/Facebook-icon.svg';
import logoTwitter from '../images/Atomos/Twitter-icon.svg';

class FooterA extends React.Component {
    render() {
      return (
        <footer>
          <div className="text-Block">
            <ul>
              <li><a href="">Privacidad</a></li>
              <li><a href="">Términos y condiciones</a></li>
              <li><a href="">Contacto</a></li>
              <li><a href="">Acerca de Re-Z</a></li>
            </ul>
            <div className="copyrigth-style">
              <p>© Re-Z, Todos los derechos reservados </p> 
            </div>
          </div>
            <div className="socialNetwork-menu">
                <img src={logoInstagram} alt="Instagram"/>
                <img src={logoFacebook} alt="Facebook"/>
                <img src={logoTwitter} alt="Twitter"/>
            </div> 
        </footer>
      )     
    }
  }
  
  export default FooterA;

