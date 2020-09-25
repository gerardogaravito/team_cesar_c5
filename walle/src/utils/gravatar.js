// this is the function to get the gravatar hash to show the avatar

import md5 from 'md5';

export const gravatar = (email) => {
	const base = 'https://s.gravatar.com/avatar/';
	const formattedEmail = email.trim().toLowerCase();
	const hash = md5(formattedEmail, { encoding: 'binary' });
	return `${base}${hash}`;
};
