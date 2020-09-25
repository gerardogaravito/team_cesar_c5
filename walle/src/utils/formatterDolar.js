// this is the function to format a number to dollar

export const formatterDolar = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
