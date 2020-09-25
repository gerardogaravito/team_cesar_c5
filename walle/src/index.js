//------------------------------ import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//------------------------------ import components
import App from './router/app';
import generateStore from './store';

//------------------------------ import styles
import './assets/global-styles/Globalstyles.scss';

const store = generateStore();

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
}
render();

// this function get the hot module replacement from webpack and prevent the browser reload
if (module.hot) {
	module.hot.accept('./router/app', () => render());
}
