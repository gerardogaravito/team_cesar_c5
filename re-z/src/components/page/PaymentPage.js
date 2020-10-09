import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Button from '../Button';
import Navbar from '../Navbar';
import ShoppingCar from '../ShoppingCar';
import RecipeIngredient from '../Ingredient/RecipeIngredient'
import '../styles/PaymentPage.css';



const PaymentPage = (props) => {
  // const ingredientes = useSelector(state => state.cart)

  const GoToPlay = <section className='PaymentPage__GoToPay'>
    <Button text="Comprar" />
    <p className='PaymentPage__GoToPay--detail'>Usamos Payonner como metodo de pago</p>
    <a className='PaymentPage__GoToPay--detail' href='https://www.payoneer.com/es/solutions/'  target="_blank" >Conocer más</a>
    <img className='PaymentPage__GoToPay--img' src="https://www.payoneer.com/wp-content/uploads/payoneer-dark-logo.svg" alt="logo_Payonner" />
  </section>;

  const Addresexample = "Avenida siempre viva 123 12300 NW 29TH PL SUNRISE FLORIDA SUNRISE, FL 123123-1231   Estados Unidos Teléfono: +1 9546557580";

  useEffect(() => {
    window.scroll(0, 0) //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
  }, []);

  //-----PARA MOSTRAR INGREDIENTES----- (metodo sin usar redux)
  const {myId} = useParams();
  // se obtenien las recetas del local storage y se almacenan en una variable
  const recipesLocalStorage = JSON.parse( localStorage.getItem("recipes"))
  const recipe = recipesLocalStorage.find(item => item.id === parseInt(myId));

  // se obtenien los ingredientes del local storage y se almacenan en una variable
  const ingredientsLocalStorage = JSON.parse( localStorage.getItem("ingredients"))


  const ingredients = ingredientsLocalStorage.filter( (item) => {
    return item.Recipe === parseInt(myId)
  })



  const Totalprice = ingredients.reduce((accumulator,current) => {
    return accumulator += current.price
  },0
  )
  return (
      <>
        <Navbar />
        <div className='PaymentPage'>
          <ShoppingCar RecipeName={recipe.name} Amount= {`$${Totalprice} dlls`} UserName={"Homero J. Simpson"} Address ={Addresexample}/>
          <div className="PaymentPage__ingredients">
            Ingredientes
            {
              ingredients.map((item) => (
                  <RecipeIngredient key={item.id} data={item} />
              ))
            }
          </div>
          {GoToPlay}
        </div>
      </>

  )
}

export default PaymentPage;