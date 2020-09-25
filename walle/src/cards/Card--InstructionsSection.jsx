// ------------------------------ import libraries
import React, { Fragment } from 'react';

// ------------------------------ import icons
import {
	FaUserAlt,
	FaHamburger,
	FaCartPlus,
	FaGratipay,
	FaMoneyBillAlt,
	FaShoppingBasket,
} from 'react-icons/fa';

//------------------------------ import styles and images
import '../assets/components-style/InstructionsSection.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the instruction section in landing page.
const InstructionsSection = () => {
	return (
		<Fragment>
			<section className="InstructionsSection">
				<h2>Como funciona</h2>
				<div className="InstructionsSection__icons">
					<div className="InstructionsSection__icon">
						<FaUserAlt className="icon--xl" />
						<p>Crea un usuario</p>
					</div>
					<div className="InstructionsSection__icon">
						<FaGratipay className="icon--xl" />
						<p>Escoge tus recetas favoritas</p>
					</div>
					<div className="InstructionsSection__icon">
						<FaMoneyBillAlt className="icon--xl" />
						<p>Puedes pagar en línea</p>
					</div>
					<div className="InstructionsSection__icon">
						<FaHamburger className="icon--xl" />
						<p>Busca en nuestro catalogo de recetas</p>
					</div>
					<div className="InstructionsSection__icon">
						<FaCartPlus className="icon--xl" />
						<p>Agrega al carrito de compras</p>
					</div>
					<div className="InstructionsSection__icon">
						<FaShoppingBasket className="icon--xl" />
						<p>Los ingredientes de las recetas llegará a ti</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default InstructionsSection;
