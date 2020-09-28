import React from 'react';
import Button from '../Button';
import Navbar from '../Navbar';
import ShoppingCar from '../ShoppingCar';
import '../styles/PaymentPage.css';


const PaymentPage=(props) => {
  const GoToPlay = <section className='PaymentPage__GoToPay'>
    <Button text="Comprar" />
    <p className='PaymentPage__GoToPay--detail'>Usamos Payonner como metodo de pago</p>
    <a className='PaymentPage__GoToPay--detail' href='https://www.payoneer.com/es/solutions/'  target="_blank" >Conocer más</a>
    <img className='PaymentPage__GoToPay--img' src="https://www.payoneer.com/wp-content/uploads/payoneer-dark-logo.svg" alt="logo_Payonner" />
  </section>;
  const Addresexample = "Avenida siempre viva 123 12300 NW 29TH PL SUNRISE FLORIDA SUNRISE, FL 123123-1231   Estados Unidos Teléfono: +1 9546557580";
  return (
      <div>
        <Navbar />
        <div className='PaymentPage'>
          <ShoppingCar RecipeName={"Cup Guacamole"} Amount={"US $ 5.13"} UserName={"Homero J. Simpson"} Address ={Addresexample}/>
          {GoToPlay}
        </div>
      </div>

  )
}

export default PaymentPage;