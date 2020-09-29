import React from 'react';

import Clock from '../images/Atomos/Clock.svg';
import './AnimationStyles/CookTime.css';

const CookTime = () => (
    <div className="time-cook">
        <div className="hand"></div>
        <div className="hand2"></div>
         <img src={Clock} alt="Icon" />          
    </div>
)
export default CookTime;