import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span className='title'>Sign in with your email and password.</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='signinButtons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
