import React from 'react';


import './styles/NavBarLanding.css';
import Logo from '../images/logo.png';
import Search from '../components/Search';
import NavegationLanding from './NavegationLanding';
import { Link } from 'react-router-dom';


class NavBarLanding extends React.Component{
    

    render(){
        return (
            <div className="NavbarLanding">
                <div className="styles-log">
                    <img src={Logo} alt="Logo_Re-z"/>
                </div>
                <Search />
                <NavegationLanding />
                
            </div>
        )
    }
}

export default NavBarLanding; 