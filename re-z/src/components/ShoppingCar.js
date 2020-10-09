import React from 'react';
import '../components/styles/ShoppingCar.css'

const ShoppingCar= ({RecipeName,Amount,UserName,Address})=>{
  return (
    <section className='PaymentPageCard'>
      <h1 className='PaymentPageCard__title'>Carrito de Compras</h1>
      <div className="PaymentPageCard__DetailAmount">
        <h3 className='PaymentPageCard__DetailAmount--RecipeName'>{RecipeName}</h3>
        <h1 className='PaymentPageCard__DetailAmount--Amount'>Total: {Amount}</h1>
      </div>
      <h5 className='PaymentPageCard__Username'>{UserName}</h5>
      <h5 className='PaymentPageCard__Address'>{Address}</h5>
    </section>
  )
}

export default ShoppingCar;