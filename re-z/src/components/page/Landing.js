import React from 'react';

import '../styles/Landing.css';
import NavBarLanding from '../NavBarLanding'
import CardVerticalScroll from '../CardVerticalScroll';
import FooterA from '../FooterA'

import spot from '../../images/spotPrueba.png'

class Landing extends React.Component {
  render () {
    return (
        <div className="landing">
              <header>
                <NavBarLanding/>
              </header>
              <div className="landing-container">
                <div className="landing__spot">
                  <img src={spot} alt="spot"/>
                </div>
                <div className="landing__recipes">
                  <CardVerticalScroll />
                </div>
              </div>
              <FooterA/>
        </div>
    )
  }
}

export default Landing