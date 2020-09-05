import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, Title, SignInButtonsContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignInContainer>
				<h2>I already have an account</h2>
				<Title>Sign in with your email and password.</Title>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email*'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
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
	}
}

export default SignIn;
