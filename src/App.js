import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignUpAndSignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

import './App.css';
const App = ({ currentUser, setCurrentUser }) => {
	useEffect(
		() => {
			const unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
				if (authUser) {
					const userRef = await createUserProfileDocument(authUser);

					userRef.onSnapshot(snapShot => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						});
					});
				} else {
					setCurrentUser(authUser);
				}
			});

			return () => {
				unsubscribeFromAuth();
				setCurrentUser(null);
			};
		},
		[ setCurrentUser ]
	);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route
					exact
					path='/signin'
					render={() => (currentUser ? <Redirect to='/' /> : <SignUpAndSignInPage />)}
				/>
				<Route exact path='/checkout' component={CheckoutPage} />
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
