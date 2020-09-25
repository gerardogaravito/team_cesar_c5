// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import '../assets/global-styles/inputs.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the input and label component
// it has a class modifier to center the label if needed
const Input = ({
	name,
	type,
	placeholder,
	label,
	getInputValue,
	classmodifier,
}) => {
	return (
		<div className={`input${classmodifier}`}>
			<label className="input-label" htmlFor={name}>
				{label}
			</label>
			<input
				className={`input-text${classmodifier}`}
				name={name}
				type={type}
				placeholder={placeholder}
				id={name}
				onChange={getInputValue}
			/>
		</div>
	);
};

export default Input;
