import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import { store, persistor } from './redux/store';

import './index.css';
import * as serviceWorker from './serviceWorker';

dotenv.config();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();
