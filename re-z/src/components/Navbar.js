import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import Logo from '../images/logo.png';
import Search from '../components/Search';
import SwitchPerfil from '../components/SwitchPerfil'

const Navbar = () => {
    
        return (
            <div className="Navbar">
                <Link to="/home">
                    {/* <div className="styles-log"> */}
                        <img className="styles-log-img" src={Logo} alt="Logo_Re-z"/>
                    {/* </div> */}
                </Link>
                <Search />
                <SwitchPerfil />
            </div>
        )
    }

export default Navbar; 