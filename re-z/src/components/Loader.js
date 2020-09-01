import React from 'react';


import './styles/Loader.css';
import loaderIcon from '../images/Atomos/loader-icon.svg'

class Loader extends React.Component{
    render(){
        return(
            <div className="loader-container">
            <img src={loaderIcon} alt=""/>
            <div className="loader-animation"></div>  
            </div>
        )
    }
}
export default Loader;