import React from 'react';

import './styles/NavBarLanding.css';
import Logo from '../images/logo.png';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

class NavBarLanding extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="styles-log">
                    <img src={Logo} alt="Logo_Re-z"/>
                </div>
                <Search />
                <div className="LandingMenu">
                    <a href="">Regístrate</a>
                    <a href="">Iniciar Sesión</a>
                </div>
            </div>
        )
    }
}

export default NavBarLanding; 