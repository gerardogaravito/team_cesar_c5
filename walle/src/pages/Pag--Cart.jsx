//------------------------------ import libraries
import React from 'react';

//------------------------------ import components
import SearchHero from '../components/Com--Search-hero';
import CartHead from '../cards/Card--Cart-head';
import CartSection from '../components/Com--Cart-section';
import Payment from '../components/Com--Payment';
import Footer from '../components/Com--Footer';

//------------------------------ import styles and images
import '../assets/components-style/Layout.scss';

//------------------------------------ COMPONENT ------------------------------------//
const CartPage = () => {
	return (
		<div className="Layout">
			<SearchHero name="Cart" />
			<div className="Layout__body">
				<CartHead />
				<CartSection />
				<Payment />
			</div>
			<Footer />
		</div>
	);
};

export default CartPage;
