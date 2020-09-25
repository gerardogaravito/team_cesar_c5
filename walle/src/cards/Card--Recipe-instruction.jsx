// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the instruction item in recipe page.
const InstructionItem = ({ id, step, description }) => {
	return (
		<div className="InstructionItem">
			<input type="checkbox" id={id} />
			<label className="InstructionItem__label" htmlFor={id}>
				<p className="InstructionItem__step">{step}.</p>
				<p className="InstructionItem__description">{description}</p>
			</label>
		</div>
	);
};

export default InstructionItem;
