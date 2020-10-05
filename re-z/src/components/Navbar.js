import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import Logo from '../images/logo.png';
import Search from '../components/Search';
import SwitchPerfil from '../components/SwitchPerfil'


const Navbar = () => {
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed &&
            setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
    })

    const NabBarAnimate = (fixed) => (
        <div className={fixed ? 'fixed' : 'NavbarLogged-in'}>
            <Link to="/home">
                <img className="styles-log-img" src={Logo} alt="Logo_Re-z"/>
            </Link>
            <Search />
            <SwitchPerfil />
        </div>
    )
        return (
            <Fragment>
                {NabBarAnimate()}
                {showFixed && NabBarAnimate(true)}
            </Fragment>
        )
    }

export default Navbar; 