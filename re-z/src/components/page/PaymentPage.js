import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchRecipe } from '../../hooks/useFetchRecipe';

import Button from '../Button';
import Navbar from '../Navbar';
import ShoppingCar from '../ShoppingCar';
import RecipeCardHorizontalSimple from '../RecipeCardHorizontalSimple';
import RecipeIngredient from '../Ingredient/RecipeIngredient'
import '../styles/PaymentPage.css';

import data from '../../../recipe.json';

const PaymentPage = (props) => {
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
  const [recipeList] = useFetchRecipe(data.recipes);
  const recipe = recipeList.find(item => item.id === parseInt(myId));

  console.log(recipe.ingredients)

  return (
      <div>
        <Navbar />
        <div className='PaymentPage'>
          <ShoppingCar RecipeName={recipe.name} Amount={"US $ 5.13"} UserName={"Homero J. Simpson"} Address ={Addresexample}/>
          <div className="PaymentPage__ingredients">
            Ingredientes
            {
              recipe.ingredients.map((item) => (
                <React.Fragment key={item.id}>
                  <RecipeIngredient data={item} />
                </React.Fragment>
              ))
            }
          </div>
          {GoToPlay}
        </div>
      </div>

  )
}

export default PaymentPage;