import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignUpAndSignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignUpAndSignInPage} />
			</Switch>
		</div>
	);
}

export default App;
