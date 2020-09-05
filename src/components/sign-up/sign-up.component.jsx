import React from 'react';

import { SignUpContainer, Title } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Password don't match!");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
		} catch (error) {
			console.error(error);
		}

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<SignUpContainer>
				<h2>I do not have a account</h2>
				<Title>Sign up with your email and password</Title>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						handleChange={this.handleChange}
						label='display name*'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						handleChange={this.handleChange}
						label='email*'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						handleChange={this.handleChange}
						label='password*'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						handleChange={this.handleChange}
						label='confirm password*'
						required
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
