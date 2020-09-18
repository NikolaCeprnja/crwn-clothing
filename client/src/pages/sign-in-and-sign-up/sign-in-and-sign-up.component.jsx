import React from 'react';
import { Link } from 'react-router-dom';

import { SignInAndSignUpContainer, SignUpLink } from './sign-in-and-sign-up.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignUpAndSignInPage = () => (
	<SignInAndSignUpContainer>
		<SignIn />
		<SignUpLink>
			Don't have an account? &rarr;
			<Link to='/signup'>Go to SignUp</Link>
		</SignUpLink>
		<SignUp />
	</SignInAndSignUpContainer>
);

export default SignUpAndSignInPage;
