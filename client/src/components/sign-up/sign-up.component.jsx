import React, { useState } from 'react';

import { SignUpContainer, Title } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
	const [ userCredentials, setUserCredentials ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

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

		setUserCredentials({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	};

	const handleChange = event => {
		const { value, name } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>I do not have a account</h2>
			<Title>Sign up with your email and password</Title>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					handleChange={handleChange}
					label='display name*'
					required
				/>
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
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					handleChange={handleChange}
					label='confirm password*'
					required
				/>
				<CustomButton type='submit'>Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
