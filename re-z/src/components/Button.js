import React from 'react';

import './styles/Button.css';


const Button = ({text, onClick}) => {

  return (
    <button 
      className='button'
      onClick={onClick}
    >{text}</button>
  )
}

export default Button;