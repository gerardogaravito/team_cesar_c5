//------------------------------ import libraries
import React from 'react';

//------------------------------ import styles and images
import '../assets/components-style/CartSection.scss';

//------------------------------------ COMPONENT ------------------------------------//
// this component only return the head of cart list table
const CartHead = () => {
	return (
		<div className="CartHead">
			<p>Nombre</p>
			<p>unidad</p>
			<p>Cantidad</p>
			<p>Precio</p>
		</div>
	);
};

export default CartHead;
