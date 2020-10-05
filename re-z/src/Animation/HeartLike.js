import React, { useState } from 'react';

import './AnimationStyles/HeartLike.css';


const HeartLike = () =>{
        const [clase, setClase] = useState(true);
        
        const handleClick = () => {
            setClase(!clase);
        };

    return(
        <div className="like-box">
            <div onClick={handleClick} className={clase ? 'like' : 'liked'}></div>
            </div>
    )
}


export default HeartLike;

