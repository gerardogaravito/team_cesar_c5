import React from 'react';

import '../styles/NotFound.css'
import Navbar from '../Navbar'
import Footer from '../FooterA'

class NotFound extends React.Component {
  handleBackClick = () => {
    this.props.history.goBack();
  }

  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <div className='notfound'>
          <h1 className='notfound__h1'>Error 404</h1>
          <h2 className='notfound__h2'>No pudimos encontrar lo que buscabas :(</h2>
          <button 
            className='button'
            onClick={this.handleBackClick}
            >Ir a la ruta anterior 👈</button>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default NotFound;