import React from 'react';
import ReactPlayer from 'react-player'

import '../styles/Landing.css';
import NavBarLanding from '../NavBarLanding'
import CardVerticalScroll from '../CardVerticalScroll';
import FooterA from '../FooterA'
import RecipeCardSquare from '../RecipeCardSquare';

class Landing extends React.Component {
  render () {
    return (
        <div className="landing">
              <header>
                <NavBarLanding/>
              </header>
              <div className="landing-container-principal">
                <div className="landing__spot">
                  <ReactPlayer url='https://youtu.be/kuB8rR2b2Ak'
                  width='100%'
                  height='100%'
                  playing= 'true' 
                  loop
                  muted/>
                </div>
                <div className="landing__recipes">
                  <CardVerticalScroll />
                </div>
              </div>

              <div className="landing__container-secundary">
                {/* Dentro de este div debe de ir el contenido que sigue al video y al escroll de las tarjetas el llamado de la siguiente tarjeta es solo contenido de relleno*/}
                <RecipeCardSquare />
              </div>
              <FooterA/>
        </div>
    )
  }
}

export default Landing