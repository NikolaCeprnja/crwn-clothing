import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, Title, SignInButtonsContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

const SignIn = () => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setUserCredentials({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = event => {
		const { value, name } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<Title>Sign in with your email and password.</Title>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={email}
					handleChange={handleChange}
					label='email*'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					handleChange={handleChange}
					label='password*'
					required
				/>
				<SignInButtonsContainer>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</SignInButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
