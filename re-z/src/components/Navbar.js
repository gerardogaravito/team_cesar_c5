import React from 'react';

import './styles/Navbar.css';
import Logo from '../images/logo.png';
import Search from '../components/Search';
import SwitchPerfil from '../components/SwitchPerfil'
/* import { Link } from 'react-router-dom'; */

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                    <div className="styles-log">
                        <img src={Logo} alt="Logo_Re-z"/>
                    </div>
                <Search />
                <SwitchPerfil />
            </div>
        )
    }
}

export default Navbar; 