import React from 'react';

import ClockBlack from '../images/Atomos/CookTimeBlack.svg';
import './AnimationStyles/CookTimeBlack.css';

const CookTimeBlack = () => (
    <div className="time-cook">
        <div className="hand"></div>
        <div className="hand2"></div>
         <img src={ClockBlack} alt="Icon" />          
    </div>
)
export default CookTimeBlack;