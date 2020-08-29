import React from 'react';

import Navbar from '../Navbar';
import FooterA from '../FooterA';

class Home extends React.Component{
    render(){
        return (
            <div className="Home-container">
                <Navbar />
                <FooterA />
            </div>
        )
    }
}

export default Home; 