import React, { Fragment, useEffect, useState } from 'react';


import './styles/NavBarLanding.css';
import Logo from '../images/logo.png';
import Search from '../components/Search';
import NavegationLanding from './NavegationLanding';


const NavBarLanding = () => {
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed &&
            setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
    })

    const NavBarLandinAnimate = (fixed) => (
        <div className={fixed ? 'fixedLanding' : 'NavbarLanding'}>
                <div className="styles-log">
                    <img src={Logo} alt="Logo_Re-z"/>
                </div>
                <Search />
                <NavegationLanding />   
            </div>       
    )
        return (
            <Fragment>
                {NavBarLandinAnimate()}
                {showFixed && NavBarLandinAnimate(true)}
            </Fragment>
        )
    }

export default NavBarLanding; 