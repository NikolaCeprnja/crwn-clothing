import styled from 'styled-components';

export const ErrorPageOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ErrorPageImageContainer = styled.div`
	display: inline-block;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`;

export const ErrorPageImageTitle = styled.h2`
	margin-bottom: 0;
	font-size: 28px;
	color: rgb(223, 36, 93);
`;

export const ErrorPageText = styled.h4`color: rgb(223, 36, 93);`;
