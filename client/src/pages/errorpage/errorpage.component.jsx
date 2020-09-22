import React from 'react';

import {
	ErrorPageOverlay,
	ErrorPageImageContainer,
	ErrorPageImageTitle,
	ErrorPageText
} from './errorpage.styles';

const ErrorPage = () => (
	<ErrorPageOverlay>
		<ErrorPageImageContainer imageUrl='https://i.imgur.com/DWO5Hzg.png' />
		<ErrorPageImageTitle>This Page is Wrong</ErrorPageImageTitle>
		<ErrorPageText>
			The gap in the toy is a triangle and you only have the cylinder and cube pieces. In dismay you
			toss the toy aside.
		</ErrorPageText>
	</ErrorPageOverlay>
);

export default ErrorPage;
