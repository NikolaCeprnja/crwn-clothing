import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import SignUp from './components/sign-up/sign-up.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ErrorPage from './pages/errorpage/errorpage.component';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));
const SignUpAndSignInPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkoutpage.component'));

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
			<GlobalStyle />
			<Header />
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route
							exact
							path='/signin'
							render={() => (currentUser ? <Redirect to='/' /> : <SignUpAndSignInPage />)}
						/>
						<Route
							exact
							path='/signup'
							render={() => (currentUser ? <Redirect to='/' /> : <SignUp />)}
						/>
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route component={ErrorPage} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
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
